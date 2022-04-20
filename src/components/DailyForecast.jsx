import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const ForecastDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const DaysTemp = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const Day = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  margin-right: 2rem;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-right: 2rem;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
`;

const DayHigh = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;

const DayLow = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
`;

const DailyForecast = ({ API_KEY }) => {
  const [dailyForecast, setDailyForecast] = useState({});
  const [err, setErr] = useState("");

  console.log(dailyForecast);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getForecast, showError);
  }, []);

  const showError = () => {
    setErr("Unable to get your location");
  };

  const getForecast = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      );
      setDailyForecast(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {err ? (
        <div>{err}</div>
      ) : (
        <Wrapper>
          {dailyForecast?.daily && (
            <>
              {dailyForecast.daily.slice(1, 7).map((day) => (
                <ForecastDay key={day.dt}>
                  <Day>
                    {new Date(day.dt * 1000)
                      .toUTCString()
                      .slice(0, 3)
                      .toUpperCase()}
                  </Day>
                  <ImgContainer>
                    <Img
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt={day.weather[0].description}
                    ></Img>
                  </ImgContainer>
                  <DaysTemp>
                    <DayHigh>max {Math.round(day.temp.max)}° </DayHigh>
                    <DayLow>min {Math.round(day.temp.min)}° </DayLow>
                  </DaysTemp>
                </ForecastDay>
              ))}
            </>
          )}
        </Wrapper>
      )}
    </Container>
  );
};

export default DailyForecast;
