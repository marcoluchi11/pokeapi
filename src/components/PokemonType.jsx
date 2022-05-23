import styled from "@emotion/styled";

const ContainerTipos = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    margin: 0.5rem;
    padding: 0.3rem 1rem;
    border: 1px solid #000;
    border-radius: 25px;
    text-transform: capitalize;
  }
`;
const PokemonType = ({ item }) => {
  return (
    <ContainerTipos>
      {item.types.map((elem) => (
        <h3 className={`${elem.type.name}`}> {elem.type.name}</h3>
      ))}
    </ContainerTipos>
  );
};

export default PokemonType;
