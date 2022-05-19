import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";

const Container = styled.form`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  border-radius: 15px;
  padding: 0.5rem;
`;
const Search = () => {
  const { list, search, setSearch, setFilter } = useContext(PokeContext);

  const handleChange = (e) => setSearch(e.target.value);
  useEffect(() => {
    const copyList = list;

    const filterList = copyList.filter((item) => {
      if (search === "") {
        return true;
      } else if (item.name.toLowerCase().includes(search)) {
        return true;
      } else {
        return false;
      }
    });
    setFilter(filterList);
  }, [search]);
  return (
    <Container>
      <img
        src={
          "https://icongr.am/material/magnify.svg?size=32&color=currentColor"
        }
        alt="search"
      />
      <Input
        onChange={handleChange}
        autoComplete="off"
        type="text"
        id="search"
        value={search}
        placeholder="Buscar..."
      />
    </Container>
  );
};

export default Search;
