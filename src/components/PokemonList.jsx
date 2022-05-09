import styled from "@emotion/styled";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const ItemCard = styled.div`
  margin: 1rem;
  padding: 1rem;
`;
const Titulo = styled.h1`
  a {
    text-transform: capitalize;
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const PokemonList = () => {
  const { list } = useContext(PokeContext);
  return (
    <Container>
      {list.map((item, index) => (
        <ItemCard>
          <Titulo>
            <a href={item.url}>
              {index + 1} {item.name}
            </a>
          </Titulo>
        </ItemCard>
      ))}
    </Container>
  );
};

export default PokemonList;
