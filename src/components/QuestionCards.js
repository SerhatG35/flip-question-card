import Card from "./Card";

const QuestionCards = ({ data, options, correctAnswer }) => {


  return (
    <div className="cardContainer">
      {data?.map((data, index) => {
        return (
          <Card
            data={data}
            options={options[index]}
            correctAnswer={correctAnswer[index]}
            key={index}
            currentCard={index}
          />
        );
      })}
    </div>
  );
};

export default QuestionCards;
