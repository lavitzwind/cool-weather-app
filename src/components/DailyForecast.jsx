import styled from "styled-components";

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

const DailyForecast = () => {
  return (
    <Container>
      <Wrapper>
        <ForecastDay>
          <Day>Saturday</Day>
          <ImgContainer>
            <Img src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></Img>
          </ImgContainer>
          <DaysTemp>
            <DayHigh>12°</DayHigh>
            <DayLow>8°</DayLow>
          </DaysTemp>
        </ForecastDay>
        <ForecastDay>
          <Day>Sunday</Day>
          <ImgContainer>
            <Img src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></Img>
          </ImgContainer>
          <DaysTemp>
            <DayHigh>12°</DayHigh>
            <DayLow>8°</DayLow>
          </DaysTemp>
        </ForecastDay>
        <ForecastDay>
          <Day>Monday</Day>
          <ImgContainer>
            <Img src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></Img>
          </ImgContainer>
          <DaysTemp>
            <DayHigh>12°</DayHigh>
            <DayLow>8°</DayLow>
          </DaysTemp>
        </ForecastDay>
        <ForecastDay>
          <Day>Tuesday</Day>
          <ImgContainer>
            <Img src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></Img>
          </ImgContainer>
          <DaysTemp>
            <DayHigh>12°</DayHigh>
            <DayLow>8°</DayLow>
          </DaysTemp>
        </ForecastDay>
        <ForecastDay>
          <Day>Wednesday</Day>
          <ImgContainer>
            <Img src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></Img>
          </ImgContainer>
          <DaysTemp>
            <DayHigh>12°</DayHigh>
            <DayLow>8°</DayLow>
          </DaysTemp>
        </ForecastDay>
        <ForecastDay>
          <Day>Thursday</Day>
          <ImgContainer>
            <Img src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></Img>
          </ImgContainer>
          <DaysTemp>
            <DayHigh>12°</DayHigh>
            <DayLow>8°</DayLow>
          </DaysTemp>
        </ForecastDay>
      </Wrapper>
    </Container>
  );
};

export default DailyForecast;
