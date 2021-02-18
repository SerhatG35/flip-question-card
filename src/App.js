import { useState, useEffect } from "react";

import QuestionCards from "./components/QuestionCards";
import SelectionMenu from "./components/SelectionMenu";

function App() {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    console.log(options);
  }, [options]);
  return (
    <div className="App">
      <div className="mainContainer">
        <SelectionMenu setData={setData} setOptions={setOptions} data={data} />
        <QuestionCards data={data} options={options} />
      </div>
    </div>
  );
}
export default App;
