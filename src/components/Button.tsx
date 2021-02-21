import { fetchQuestions } from '../utils/datafetch';

const Button = ({ quantity, category, difficulty, setData, setIsLoading }) => {
  const handleClick = async () => {
    setIsLoading(true);
    const results = await fetchQuestions({ quantity, category, difficulty });
    setData(results);
    setIsLoading(false);
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
