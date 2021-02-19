import { useState, useEffect } from "react";

import QuestionCards from "./components/QuestionCards";
import SelectionMenu from "./components/SelectionMenu";
import { decodeString } from "./utils/decodeString";

function App() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  const shuffleOptions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    console.log(data);
    setCorrectAnswer(data?.map((x) => decodeString(x.correct_answer)));
    setOptions(
      data?.map((x) => {
        return shuffleOptions([...x?.incorrect_answers, x?.correct_answer]);
      })
    );
  }, [data]);
  useEffect(() => {
    console.log(options, "options");
  }, [options]);
  useEffect(() => {
    console.log(correctAnswer, "correct");
  }, [correctAnswer]);
  return (
    <div className="App">
      <div className="mainContainer">
        <SelectionMenu setData={setData} data={data} />
        <QuestionCards
          data={data}
          options={options}
          correctAnswer={correctAnswer}
        />
      </div>
    </div>
  );
}
export default App;
