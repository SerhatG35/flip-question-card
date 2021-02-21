import { QuestionType } from 'global';
import Card from './Card';

type QuestionCardsProps = {
  setData: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  data : QuestionType[]
  options : string[][]
  correctAnswers : string[]
};

const QuestionCards = ({ data, options, correctAnswers, setData } : QuestionCardsProps) => {
  return (
    <div className="cardContainer">
      {data?.map((card, index) => {
        return (
          <Card
            card={card}
            data={data}
            options={options[index]}
            correctAnswer={correctAnswers[index]}
            key={index}
            currentCard={index}
            setData={setData}
          />
        );
      })}
    </div>
  );
};

export default QuestionCards;
