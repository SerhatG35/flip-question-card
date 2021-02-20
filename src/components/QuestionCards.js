import Card from './Card';

const QuestionCards = ({
  data,
  options,
  correctAnswers,
  setData,
  setIsLoading,
}) => {
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
