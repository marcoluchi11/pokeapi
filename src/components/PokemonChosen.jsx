import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
const ContainerBoton = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  svg {
    padding: 0.5rem 0;
    background-color: #000;
    color: #fff;
  }
`;
const Boton = styled.button`
  border-radius: 15px;
  padding: 0.5rem 1rem;
  background-color: #000;
  color: white;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 5rem;
  div {
    h1 {
      text-transform: capitalize;
    }
  }
`;

const PokemonChosen = ({ chosen }) => {
  const { setMore, setChosen } = useContext(PokeContext);
  const handleClick = () => {
    setMore(false);
    setChosen({});
  };
  return (
    <div>
      {chosen.map((item) => (
        <Container key={nanoid()}>
          <div>
            <img src={item.sprites.front_default} alt="pokemon" />
          </div>
          <div>
            <h1>
              #{item.id} {item.name}
            </h1>
            <h2>Altura: {item.height}"</h2>
            <h2>Peso: {item.weight} Lbs</h2>
            <h4> Experiencia base: {item.base_experience}</h4>
          </div>
          {/* <img src={item.sprites.back_default} alt="pokemon" />
          <img src={item.sprites.front_shiny} alt="pokemon" /> */}
        </Container>
      ))}
      <ContainerBoton onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-back"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
        </svg>
        <Boton>Back</Boton>
      </ContainerBoton>
    </div>
  );
};

export default PokemonChosen;
