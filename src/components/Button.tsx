import { fetchQuestions } from '../utils/datafetch';
import { QuestionType } from 'global';

type ButtonProps = {
  quantity :number
  category :number
  difficulty :string
  setData: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button = ({ quantity, category, difficulty, setData, setIsLoading } : ButtonProps) => {
  const handleClick = async () => {
    setIsLoading(true);
    const results = await fetchQuestions({ quantity, category, difficulty });
    setData(results);
    setIsLoading(false);
  };

  return (
      <button
        className="bringQuestions"
        onClick={() => {
          handleClick();
        }}
      >
        Submit
      </button>
  );
};

export default Button;
