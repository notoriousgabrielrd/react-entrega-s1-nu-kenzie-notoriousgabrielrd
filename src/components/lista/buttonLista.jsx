const ButtonLista = ({ img, alt, callBack, id }) => {
  return (
    <button className="button-lixo" onClick={callBack} id={id}>
      <img src={img} alt={alt}></img>
    </button>
  );
};

export default ButtonLista;
