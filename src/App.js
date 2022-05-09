import styled from "@emotion/styled";
import { useContext } from "react";
import PokemonList from "./components/PokemonList";

import { PokeContext } from "./context/PokeContext";

const Boton = styled.button`
  background-color: turquoise;
  color: white;
  border-radius: 15px;
  margin: 1rem;
  padding: 0 0.5rem;
  transition: background-color linear 1s;
  &&:hover {
    background-color: blue;
  }
`;
function App() {
  const { data, setData } = useContext(PokeContext);
  return (
    <div className="App">
      <Boton onClick={() => setData(data + 1)}>Click</Boton>
      <PokemonList />
    </div>
  );
}

export default App;
