import styled from "@emotion/styled";
import PokemonList from "./components/PokemonList";

const Titulo = styled.h1`
  text-align: center;
  background-color: #b2b2b2;
  padding: 1rem;
  margin: 0.5rem;
  font-size: 5rem;
`;
function App() {
  return (
    <div>
      <Titulo>Kanto & Johto Pokemon</Titulo>
      <PokemonList />
    </div>
  );
}

export default App;
