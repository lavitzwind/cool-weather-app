import styled from "styled-components";

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
  width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  margin: 2rem 0 1rem 0;
`;

const CurrentForecast = () => {
  return (
    <Container>
      <Wrapper>
        <Location>Berlin, DE</Location>
        <Desc>Light Intensity Drizzle</Desc>
        <Icon
          src="http://openweathermap.org/img/wn/13d@2x.png"
          alt="Snow"
        ></Icon>
        <Temp>
          10°<Unit>c</Unit>
        </Temp>
        <Feels>Feels like 8°</Feels>
        <Wind>Wind 5 m/s</Wind>
        <Hr />
      </Wrapper>
    </Container>
  );
};

export default CurrentForecast;
