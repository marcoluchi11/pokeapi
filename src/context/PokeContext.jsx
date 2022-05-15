import { createContext, useState, useEffect } from "react";
export const PokeContext = createContext();
const PokeProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const traerDatos = () => {
    let pokedata = [];
    for (let i = 0; i <= 151; i++) {
      const fetchdata = async () => {
        const url = ` https://pokeapi.co/api/v2/pokemon/${i}`;
        const rta = await fetch(url);
        const datos = await rta.json();
        pokedata.push(datos);
        pokedata.sort((a, b) => a - b);

        setList(pokedata);
      };
      fetchdata();
    }
  };

  return (
    <PokeContext.Provider value={{ data, setData, list, setList, traerDatos }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
