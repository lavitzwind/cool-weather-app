import { useState, useRef } from "react";
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
  justify-content: space-between;
  padding: 5px 10px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  border: 3px solid #fff;
  width: calc(80% - 50px);
  margin: 0 0 10px 0;

  &:hover,
  &:focus-within {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
const Input = styled.input`
  width: calc(100% - 50px);
  height: 40px;
  padding: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  color: #fff;
  background-color: transparent;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
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

  &:hover,
  &:focus {
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
  background-color: rgba(0, 0, 0, 0.2);
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  width: 30vw;
  height: 35vh;
  top: -45vh;
  right: calc(-5% - 30px);
`;

const MenuItem = styled.li`
  margin: 5px 0 5px 30px;
  padding: 10px;
  color: #fff;
  font-size: 25px;
  width: 90%;
  height: 100%;

  &:hover {
    cursor: pointer;
    background-color: rgba(100, 100, 100, 0.8);
  }
`;

const SearchBar = ({ onSearch, onLocation, refreshWeather }) => {
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
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>
          <SearchIcon />
        </Button>
      </Form>
      <Btn onClick={handleClick}>
        <LocationSearchingIcon />
      </Btn>
      <BtnContainer onClick={() => setOpen(!open)} ref={ref}>
        <Btn2>
          <MoreVertIcon />
        </Btn2>
        <Menu
          onClick={() => setOpen(false)}
          style={{ top: open ? "5vh" : "-45vh" }}
        >
          <MenuItem>
            <HomeIcon /> Home location
          </MenuItem>
          <MenuItem>
            <SaveIcon /> Save location
          </MenuItem>
          <MenuItem>
            <CandlestickChartIcon /> Switch units
          </MenuItem>
          <MenuItem onClick={handleRefresh}>
            <ChangeCircleIcon /> Refresh Weather
          </MenuItem>
        </Menu>
      </BtnContainer>
    </Container>
  );
};

export default SearchBar;
