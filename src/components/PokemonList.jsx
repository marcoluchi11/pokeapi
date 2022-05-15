import styled from "@emotion/styled";
import { useContext, useState, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { nanoid } from "nanoid";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    height: 15rem;
    width: 15rem;
  }
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
  const { list, traerDatos } = useContext(PokeContext);

  useEffect(() => {
    traerDatos();
  }, []);
  return (
    <Container>
      <h1>Holis</h1>
      {list.map((item) => (
        <div key={nanoid()}>
          <img src={item.sprites.front_default} alt="holis" />
          <h1>{item.name}</h1>
        </div>
      ))}
    </Container>
  );
};

export default PokemonList;
