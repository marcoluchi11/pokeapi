import styled from "@emotion/styled";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PokemonType from "./PokemonType";

const Container = styled.div`
  margin: 1rem;
  border-radius: 15px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
  img {
    background-color: #c5c5c5;
    border-radius: 15px;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  div:first-of-type {
    border-bottom: 3px solid black;
  }
  div:nth-of-type(2) {
    text-align: center;
    font-weight: 700;
    span {
      text-transform: capitalize;
    }
    h1 {
      cursor: pointer;
    }
  }
`;

const PokemonCard = ({ item }) => {
  const { list, setMore, setChosen } = useContext(PokeContext);

  const handleClick = (id) => {
    const chosenOne = list.filter((item) => item.id === id);

    setChosen(chosenOne);
    setMore(true);
  };

  return (
    <Container>
      <div>
        <img
          onClick={() => handleClick(item.id)}
          src={item.sprites.front_default}
          alt="pokemonImage"
        />
      </div>
      <div>
        <h1 onClick={() => handleClick(item.id)}>
          {" "}
          #{item.id} <span>{item.name}</span>
        </h1>
      </div>
      <div>
        <PokemonType item={item} />
      </div>
    </Container>
  );
};

export default PokemonCard;
