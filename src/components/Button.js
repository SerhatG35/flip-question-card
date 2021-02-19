import {
  getQuestions1,
  getQuestions2,
  getQuestions3,
  getQuestions4,
} from "../utils/datafetch";

const Button = ({ quantity, category, difficulty, setData }) => {

  const handleClick = () => {
    if (quantity && !category && !difficulty) {
      getQuestions1(quantity, setData);
    }
    if (
      (quantity && category && !difficulty) ||
      difficulty === "any difficulty"
    ) {
      getQuestions2(quantity, category, setData);
    }
    if (quantity && category && difficulty) {
      getQuestions3(quantity, category, difficulty, setData);
    }
    if (quantity && !category && difficulty) {
      getQuestions4(quantity, difficulty, setData);
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
