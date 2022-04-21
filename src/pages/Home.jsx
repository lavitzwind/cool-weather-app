import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CurrentForecast from "../components/CurrentForecast";
import SearchBar from "../components/SearchBar";
import DailyForecast from "../components/DailyForecast";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(100, 0, 100, 0.4);
  background-image: url("assets/foggy.jpg");
  background-blend-mode: overlay;
  background-size: cover;
  padding: 0.5rem;

  visibility: visible;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1.5s;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  max-height: 1050px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 3px solid aliceblue;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 1px 1px 2.5px #000;
`;

const Home = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState({});
  const [isLoading2, setIsLoading2] = useState(false);

  const onSearch = async (text) => {
    searchLocation(text);
    try {
      setIsLoading2(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(res.data);
      setIsLoading2(false);
    } catch (err) {
      console.log(err);
    }
  };

  const searchLocation = async (text) => {
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=0&appid=${API_KEY}`
      );
      setLocation(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <SearchBar onSearch={onSearch} />
        <CurrentForecast
          API_KEY={API_KEY}
          weatherData={weatherData}
          isLoading2={isLoading2}
        />
        <DailyForecast API_KEY={API_KEY} location={location} />
      </Wrapper>
    </Container>
  );
};

export default Home;
