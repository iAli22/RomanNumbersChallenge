import { useState } from "react";
import { RomanNumerals } from "../src/helper/RomanNumerals";
import { ConverterInput } from "../src/components";
export default function App() {
  const [roman, setToRoman] = useState();
  const [number, setFromRoman] = useState("");
  let RomanNum = new RomanNumerals(roman, number);

  const onToRomanChange = (e) => {
    setToRoman(e.target.value);
  };
  const onFromRomanChange = (e) => {
    setFromRoman(e.target.value.toUpperCase());
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Hello Kids!</h1>
        <h5>Type Your Number And Watch The Magic!</h5>
      </div>
      <ConverterInput
        type="number"
        placeholder="To Roman"
        value={roman}
        onChange={(e) => onToRomanChange(e)}
        result={RomanNum.toRoman()}
      />
      <hr />
      <ConverterInput
        type="text"
        placeholder="From Roman"
        value={number}
        onChange={(e) => onFromRomanChange(e)}
        result={RomanNum.fromRoman()}
      />
    </div>
  );
}
