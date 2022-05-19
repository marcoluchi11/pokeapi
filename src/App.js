import styled from "@emotion/styled";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Imagen = styled.img`
  background-color: #b2b2b2;
  align-self: center;
  padding: 1rem;
  margin: 0.5rem;
  font-size: 5rem;
  width: 50%;
  max-width: 100%;
  height: 15rem;
`;
function App() {
  return (
    <Container>
      <Imagen
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="pokeapi"
      />
      <Search />
      <PokemonList />
    </Container>
  );
}

export default App;
