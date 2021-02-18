import {
  getQuestions1,
  getQuestions2,
  getQuestions3,
  getQuestions4,
} from "../utils/datafetch";

const Button = ({ quantity, category, difficulty, setData, setOptions }) => {

  const handleClick = () => {
    if (quantity && !category && !difficulty) {
      getQuestions1(quantity, setData, setOptions);
    }
    if (
      (quantity && category && !difficulty) ||
      difficulty === "any difficulty"
    ) {
      getQuestions2(quantity, category, setData, setOptions);
    }
    if (quantity && category && difficulty) {
      getQuestions3(quantity, category, difficulty, setData, setOptions);
    }
    if (quantity && !category && difficulty) {
      getQuestions4(quantity, difficulty, setData, setOptions);
    }
  };

  return (
    <div>
      <button
        className="bringQuestions"
        onClick={() => {
          handleClick();
        }}
      >
        GETİR FALAN
      </button>
    </div>
  );
};

export default Button;
