import { createContext, useState } from "react";
export const PokeContext = createContext();
const PokeProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [more, setMore] = useState(false);
  const [chosen, setChosen] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const traerDatos = () => {
    let pokedata = [];

    // if (i === 0) continue;
    const fetchdata = async () => {
      for (let i = 1; i <= 386; i++) {
        const url = ` https://pokeapi.co/api/v2/pokemon/${i}`;
        const rta = await fetch(url);
        const datos = await rta.json();
        pokedata.push(datos);
      }
      setList(pokedata);
    };

    fetchdata();
    setLoading(false);
  };

  return (
    <PokeContext.Provider
      value={{
        chosen,
        setChosen,
        setLoading,
        loading,
        more,
        filter,
        setFilter,
        setMore,
        data,
        setData,
        search,
        setSearch,
        list,
        setList,
        traerDatos,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
