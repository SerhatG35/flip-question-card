import { QuestionType } from 'global';
import { useState, useEffect } from 'react';

import QuestionCards from './components/QuestionCards';
import SelectionMenu from './components/SelectionMenu';
import { shuffleOptions,decodeString } from './utils/index';

function App() {
  const [data, setData] = useState<QuestionType[]>([]);
  const [options, setOptions] = useState<string[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  
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
        <SelectionMenu setData={setData} setIsLoading={setIsLoading} />
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
