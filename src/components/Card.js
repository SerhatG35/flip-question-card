import { decodeString } from "../utils/decodeString";

const Card = ({ data, options }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <p className="cardQuestion">{decodeString(data?.question)}</p>
          <div className="optionContainer">
            {options?.map((x, index) => (
              <button className="options" key={index}>
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
