import { useRef } from "react";
import { decodeString } from "../utils/decodeString";

const Card = ({ card, options, correctAnswer, currentCard, setData, data }) => {
  const checkAnswer = (e) => {
    if (
      e?.target?.parentNode?.id == currentCard &&
      e?.target?.textContent == correctAnswer
    ) {
      e.target.style.backgroundColor = "green";
      console.log(data);
      console.log(currentCard);
      // setTimeout(() => {
      //   setData(data.filter((x) => x !== currentCard));
      // }, [1000]);
    } else {
      e.target.style.backgroundColor = "red";
    }
    // console.log(e);
    // console.log(e.target.textContent, " seçilen cevap");
    // console.log(correctAnswer, " doğru cevap");
    // console.log(currentCard, " şuanki kart");
    // console.log(e.target.parentNode.id, " seçilen kartın bulunduğu kart");
  };

  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <p className="cardQuestion">{decodeString(card?.question)}</p>
          <div className="optionContainer" id={currentCard}>
            {options?.map((x, index) => {
              return (
                <button
                  onClick={checkAnswer}
                  className="options"
                  key={index}
                  id={index}
                >
                  {decodeString(x)}
                </button>
              );
            })}
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
