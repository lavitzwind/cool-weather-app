import { useState, useRef } from "react";
import { mobile, tablet, mobileS } from "../responsive";
import useOnClickOutside from "../hooks/useOnClickOutside";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import HomeIcon from "@mui/icons-material/Home";
import SaveIcon from "@mui/icons-material/Save";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 10px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 500px;
  border: 2px solid #fff;
  width: calc(90% - 20px);
  margin: 7px 30px 10px 0;
  transition: all 0.2s ease-in-out;
  ${mobile({
    margin: "7px 0px 10px 0",
  })}

  &:hover,
  &:focus-within {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border: none;
  color: #fff;
  background-color: transparent;
  ${mobileS({
    fontSize: "0.9rem",
  })}

  ::placeholder {
    color: aliceblue;
    opacity: 1;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    border: none;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

const Btn = styled.button`
  background-color: transparent;
  margin-right: 60px;
  border: none;
  padding: 0.5rem;
  outline: none;
  cursor: pointer;
  color: #fff;
  ${mobileS({
    margin: "0px 0px 0px 0px",
  })}

  &:hover {
    border: none;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

const Btn2 = styled.button`
  background-color: transparent;
  margin-right: -20px;
  border: none;
  padding: 0.5rem;
  outline: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    border: none;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

const BtnContainer = styled.div`
  position: relative;
`;

const Menu = styled.ul`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 9999;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  width: 20vw;
  height: 35vh;
  top: 55vh;
  right: calc(-5% - 30px);
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  ${tablet({
    width: "30vw",
  })}
  ${mobile({
    width: "95vw",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    right: "Calc(-1% - 30px)",
  })}
  ${mobileS({
    width: "94vw",
  })}
`;

const MenuItem = styled.li`
  margin: 5px 0 5px 30px;
  padding: 10px;
  color: #fff;
  font-size: 1rem;
  width: 90%;
  height: 100%;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })}

  &:hover {
    cursor: pointer;
    background-color: rgba(100, 100, 100, 0.8);
  }
`;

const SearchBar = ({
  onSearch,
  onLocation,
  refreshWeather,
  switchUnits,
  saveLocation,
  homeLocation,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef();

  useOnClickOutside(ref, () => setOpen(false));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  };

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(onLocation);
  };

  const handleRefresh = () => {
    refreshWeather();
  };

  const handleSwitch = () => {
    switchUnits();
  };

  const handleSaveLocation = () => {
    saveLocation();
  };

  const handleHomeLocation = () => {
    homeLocation();
  };

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          type="text"
          role="searchbox"
          size="40"
          autocomplete="off"
          placeholder="City, State, Country"
          value={search}
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button aria-label="Submit Search" title="Submit Location">
          <SearchIcon />
        </Button>
      </Form>
      <Btn
        onClick={handleClick}
        title="Get Geolocation"
        aria-label="Get the current weather conditions for your current location"
      >
        <LocationSearchingIcon />
      </Btn>
      <BtnContainer
        onClick={() => setOpen(!open)}
        ref={ref}
        title="Open options"
        aria-label="Open list of options of the app"
      >
        <Btn2>
          <MoreVertIcon />
        </Btn2>
        <Menu
          onClick={() => setOpen(false)}
          style={{ top: open ? "4vh" : "-55vh" }}
        >
          <MenuItem
            onClick={handleHomeLocation}
            title="Home weather"
            aria-label="Get the current weather conditions for your home location"
          >
            <HomeIcon /> Home location
          </MenuItem>
          <MenuItem
            onClick={handleSaveLocation}
            title="Save Location"
            aria-label="Save the current location as your home location"
          >
            <SaveIcon /> Save location
          </MenuItem>
          <MenuItem
            onClick={handleSwitch}
            title="Toggle Measurement Units"
            aria-label="Toggle between metric and imperial measurement units"
          >
            <CandlestickChartIcon /> Switch units
          </MenuItem>
          <MenuItem
            onClick={handleRefresh}
            title="Refresh Weather"
            aria-label="Refresh the current weather conditions"
          >
            <ChangeCircleIcon /> Refresh Weather
          </MenuItem>
        </Menu>
      </BtnContainer>
    </Container>
  );
};

export default SearchBar;
