import styled from "styled-components";
import axios from "axios";
import { mobile } from "../responsive";
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
  ${mobile({
    fontSize: "7rem",
    marginLeft: "1.5rem",
  })}
`;

const Unit = styled.span`
  position: absolute;
  top: 5.5rem;
  right: calc(50% - 5rem);
  font-size: 2.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6) !important;
  ${mobile({
    fontSize: "2rem",
    top: "4.5rem",
    right: "calc(50% - 4rem)",
  })}
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

const CurrentForecast = ({
  API_KEY,
  weatherData,
  isLoading2,
  units,
  statusSaver,
  homeError,
  errLocation,
}) => {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getWeather, showError);
  }, []);

  useEffect(() => {
    if (weatherData) {
      setIsLoading(true);
      setLocation(weatherData);
      setIsLoading(false);
    }
  }, [weatherData]);

  const showError = () => {
    setErr("Allow the browser to access your location");
  };

  const getWeather = async (position) => {
    // const lat = position.coords.latitude;
    // const lon = position.coords.longitude;
    // try {
    //   setIsLoading(true);
    //   const res = await axios.get(
    //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
    //   );
    //   setLocation(res.data);
    //   setIsLoading(false);
    // } catch (err) {
    //   console.log(err);
    //   setIsLoading(false);
    // }
    const urlDataObj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      units: units,
    };
    try {
      setIsLoading(true);
      const res = await axios.post(`api/get_weather`, urlDataObj);
      setLocation(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {homeError ? (
        <h1
          style={{
            color: "red",
            marginBottom: "1rem",
          }}
        >
          You have not saved any location yet!.
        </h1>
      ) : null}
      {errLocation ? (
        <h1
          style={{
            color: "red",
            marginBottom: "1rem",
          }}
        >
          Wrong location try again please.
        </h1>
      ) : null}
      {statusSaver ? (
        <h1
          style={{
            color: "green",
            marginBottom: "1rem",
          }}
        >
          Your location was saved successfully!.
        </h1>
      ) : null}
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
                src={`https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                alt={location.weather[0].description}
              ></Icon>
              <Temp>
                {Math.round(location.main.temp)}°
                <Unit>{units === "metric" ? "C" : "F"}</Unit>
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
