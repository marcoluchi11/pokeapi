import { createContext, useState, useEffect } from "react";
export const PokeContext = createContext();
const PokeProvider = ({ children }) => {
  const [data, setData] = useState(0);
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const url = ` https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;
      const rta = await fetch(url);
      const data = await rta.json();
      setList(data.results);
    };
    fetchdata();
  }, []);
  return (
    <PokeContext.Provider value={{ data, setData, list, setList }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
