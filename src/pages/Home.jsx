import styled from "styled-components";
import CurrentForecast from "../components/CurrentForecast";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
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
  return (
    <Container>
      <Wrapper>
        <SearchBar />
        <CurrentForecast />
      </Wrapper>
    </Container>
  );
};

export default Home;
