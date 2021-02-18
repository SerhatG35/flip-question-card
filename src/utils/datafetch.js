export const getCategories = async (setCategory) => {
  const res = await fetch("https://opentdb.com/api_category.php");
  const data = await res.json();
  setCategory(data?.trivia_categories);
};
// ------------------------

export const getQuestions1 = (quantity, setData, setOptions) => {
  fetch("https://opentdb.com/api.php?amount=" + quantity)
    .then((res) => res?.json())
    .then((data) => {
      setOptions(
        data?.results?.map((x) => {
          return [...x?.incorrect_answers, x?.correct_answer];
        })
      );
      setData(data?.results);
    });
};
export const getQuestions2 = (quantity, category, setData, setOptions) => {
  fetch(
    "https://opentdb.com/api.php?amount=" + quantity + "&category=" + category
  )
    .then((res) => res?.json())
    .then((data) => {
      setOptions(
        data?.results?.map((x) => {
          return [...x?.incorrect_answers, x?.correct_answer];
        })
      );
      setData(data?.results);
    });
};
export const getQuestions3 = (
  quantity,
  category,
  difficulty,
  setData,
  setOptions
) => {
  fetch(
    "https://opentdb.com/api.php?amount=" +
      quantity +
      "&category=" +
      category +
      "&difficulty=" +
      difficulty
  )
    .then((res) => res?.json())
    .then((data) => {
      setOptions(
        data?.results?.map((x) => {
          return [...x?.incorrect_answers, x?.correct_answer];
        })
      );
      setData(data?.results);
    });
};
export const getQuestions4 = (quantity, difficulty, setData, setOptions) => {
  fetch(
    "https://opentdb.com/api.php?amount=" +
      quantity +
      "&difficulty=" +
      difficulty
  )
    .then((res) => res?.json())
    .then((data) => {
      setOptions(
        data?.results?.map((x) => {
          return [...x?.incorrect_answers, x?.correct_answer];
        })
      );
      setData(data?.results);
    });
};
