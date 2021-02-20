import { useState, useEffect } from "react";

import QuestionCards from "./components/QuestionCards";
import SelectionMenu from "./components/SelectionMenu";
import { decodeString } from "./utils/decodeString";
import { shuffleOptions } from "./utils/shuffleOptions";

function App() {
  //TODO:
  /*
  shuffleOptions functioanl yapılacak.
  true-false conditional style olacak. 
  */
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  useEffect(() => {
    setCorrectAnswers(data?.map((x) => decodeString(x.correct_answer)));
    setOptions(
      data?.map((x) => {
        return shuffleOptions([...x?.incorrect_answers, x?.correct_answer]);
      })
    );
  }, [data]);

  return (
    <div className="App">
      <div className="mainContainer">
        <SelectionMenu
          setData={setData}
          data={data}
          setIsLoading={setIsLoading}
        />
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <QuestionCards
            data={data}
            setData={setData}
            options={options}
            correctAnswers={correctAnswers}
          />
        )}
      </div>
    </div>
  );
}
export default App;
