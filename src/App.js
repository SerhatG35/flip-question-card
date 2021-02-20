import { useState, useEffect } from "react";

import QuestionCards from "./components/QuestionCards";
import SelectionMenu from "./components/SelectionMenu";
import { decodeString } from "./utils/decodeString";
import { shuffleOptions } from "./utils/shuffleOptions";

function App() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);

  

  useEffect(() => {
    console.log(data);
    setCorrectAnswer(data?.map((x) => decodeString(x.correct_answer)));
    setOptions(
      data?.map((x) => {
        return shuffleOptions([...x?.incorrect_answers, x?.correct_answer]);
      })
    );
  }, [data]);
  return (
    <div className="App">
      <div className="mainContainer">
        <SelectionMenu setData={setData} data={data} />
        <QuestionCards
          data={data}
          setData={setData}
          options={options}
          correctAnswer={correctAnswer}
        />
      </div>
    </div>
  );
}
export default App;
