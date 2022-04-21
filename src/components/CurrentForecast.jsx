import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Location = styled.h1`
  font-weight: bold;
`;

const Desc = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
`;

const Icon = styled.img`
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  width: 80px;
  height: 80px;
`;

const Temp = styled.div`
  position: relative;
  font-size: 9rem;
  font-weight: 800;
  text-shadow: 1px 0 5px #000;
`;

const Unit = styled.span`
  position: absolute;
  top: 5.5rem;
  right: calc(50% - 5rem);
  font-size: 2.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6) !important;
`;

const Feels = styled.div`
  font-size: 1.5rem;
`;

const Wind = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
`;

const Hr = styled.hr`
  width: 60%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  margin: 2rem 0 1rem 0;
`;

const CurrentForecast = ({ API_KEY, weatherData, isLoading2 }) => {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getWeather, showError);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (weatherData) {
      setLocation(weatherData);
    }
    setIsLoading(false);
  }, [weatherData]);

  const showError = () => {
    setErr("Allow the browser to access your location");
  };

  const getWeather = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      setLocation(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {err ? <div>{err}.</div> : null}
      {isLoading || isLoading2 ? (
        <div>Loading...</div>
      ) : (
        <Wrapper>
          {location?.name && (
            <>
              <Location>
                {location.name}, {location.sys.country}
              </Location>
              <Desc>{location.weather[0].description}</Desc>
              <Icon
                src={`http://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                alt={location.weather[0].description}
              ></Icon>
              <Temp>
                {Math.round(location.main.temp)}°<Unit>c</Unit>
              </Temp>
              <Feels>Feels like: {Math.round(location.main.feels_like)}°</Feels>
              <Wind>Wind speed: {Math.round(location.wind.speed)} m/s</Wind>
              <Hr />
            </>
          )}
        </Wrapper>
      )}
    </Container>
  );
};

export default CurrentForecast;
