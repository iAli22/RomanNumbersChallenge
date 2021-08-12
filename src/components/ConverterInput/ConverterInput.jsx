import "./converterInput.css";

const ConverterInput = ({ result, ...res }) => {
  return (
    <div className="converterContainer">
      <input {...res} />
      <span>{result}</span>
    </div>
  );
};

export default ConverterInput;
