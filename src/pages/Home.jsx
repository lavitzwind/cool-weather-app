import styled from "styled-components";

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
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  max-height: 1050px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 1px 1px 2.5px #000;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Home;
