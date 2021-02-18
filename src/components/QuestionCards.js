import Card from "./Card";

const QuestionCards = ({ data, options }) => {
  return (
    <div className="cardContainer">
      {data?.map((data, index) => {
        return <Card data={data} options={options[index]} key={index} />;
      })}
    </div>
  );
};

export default QuestionCards;
