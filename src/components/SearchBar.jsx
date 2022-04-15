import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const Container = styled.div`
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

const SearchBar = () => {
  return (
    <Container>
      <Btn>
        <MoreVertIcon />
      </Btn>
      <Form>
        <Input
          type="text"
          role="searchbox"
          size="40"
          autocomplete="off"
          placeholder="City, State, Country"
        />
        <Button>
          <SearchIcon />
        </Button>
      </Form>
      <Btn2>
        <LocationSearchingIcon />
      </Btn2>
    </Container>
  );
};

export default SearchBar;
