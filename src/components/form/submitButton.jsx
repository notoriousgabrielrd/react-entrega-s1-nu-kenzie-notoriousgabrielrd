import "./style.css";

function SubmitButton({ text, type, className }) {
  return (
    <div className="div-pai-button">
      <button className={className} type={type}>
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
