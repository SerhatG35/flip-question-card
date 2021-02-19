import { decodeString } from "../utils/decodeString";

const Card = ({ data, options, correctAnswer, currentCard }) => {
  const checkAnswer = (selectedAnswer, id) => {
    console.log(selectedAnswer, " seçilen cevap");
    console.log(correctAnswer, " doğru cevap");
    console.log(currentCard, " şuanki kart");
  };

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <p className="cardQuestion">{decodeString(data?.question)}</p>
          <div className="optionContainer">
            {options?.map((x, index) => (
              <button
                onClick={() => checkAnswer(decodeString(x), index)}
                className="options"
                key={index}
                id={index}
              >
                {decodeString(x)}
              </button>
            ))}
          </div>
        </div>
        <div className="front">
          <i className="far fa-question-circle fa-6x"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
