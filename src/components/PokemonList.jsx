import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import PokemonCard from "./PokemonCard";
import PokemonChosen from "./PokemonChosen";
import Spinner from "./Spinner";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    height: 15rem;
    width: 15rem;
  }
`;

const PokemonList = () => {
  const { list, traerDatos, more, chosen, filter, loading, setLoading } =
    useContext(PokeContext);

  useEffect(() => {
    if (list.length > 0) return;
    setLoading(true);
    traerDatos();
    setLoading(false);
    //eslint-disable-next-line
  }, []);

  if (filter.length === 0)
    return loading ? (
      <Spinner />
    ) : (
      <Container>
        {more ? (
          <PokemonChosen chosen={chosen} />
        ) : (
          list.map((item) => <PokemonCard key={nanoid()} item={item} />)
        )}
      </Container>
    );
  else {
    return (
      <Container>
        {more ? (
          <PokemonChosen chosen={chosen} />
        ) : (
          filter.map((item) => <PokemonCard key={nanoid()} item={item} />)
        )}
      </Container>
    );
  }
};

export default PokemonList;
