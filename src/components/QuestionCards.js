import Card from "./Card";

const QuestionCards = ({
  data,
  options,
  correctAnswer,
  setData,
}) => {
  return (
    <div className="cardContainer">
      {data?.map((card, index) => {
        return (
          <Card
            card={card}
            data={data}
            options={options[index]}
            correctAnswer={correctAnswer[index]}
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
