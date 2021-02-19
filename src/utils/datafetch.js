export const getCategories = async (setCategory) => {
  const res = await fetch("https://opentdb.com/api_category.php");
  const data = await res.json();
  setCategory(data?.trivia_categories);
};
// ------------------------

export const getQuestions1 = (quantity, setData) => {
  fetch("https://opentdb.com/api.php?amount=" + quantity)
    .then((res) => res?.json())
    .then((data) => {
      setData(data?.results);
    });
};
export const getQuestions2 = (quantity, category, setData) => {
  fetch(
    "https://opentdb.com/api.php?amount=" + quantity + "&category=" + category
  )
    .then((res) => res?.json())
    .then((data) => {
      setData(data?.results);
    });
};
export const getQuestions3 = (quantity, category, difficulty, setData) => {
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
      setData(data?.results);
    });
};
export const getQuestions4 = (quantity, difficulty, setData) => {
  fetch(
    "https://opentdb.com/api.php?amount=" +
      quantity +
      "&difficulty=" +
      difficulty
  )
    .then((res) => res?.json())
    .then((data) => {
      setData(data?.results);
    });
};
