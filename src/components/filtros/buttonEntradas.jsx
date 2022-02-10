import Lista from "../lista";

const ButtonEntrada = ({ cadastro, callBack }) => {
  const newTpValor = cadastro.filter((value) => value.tipoDeValor == "Entrada");

  // return <Lista cadastro={newTpValor} />;
  return (
    <button onClick={(evt) => {
    <Lista cadastro={newTpValor} />}}>Entrada</button>
  );
};

export default ButtonEntrada;
