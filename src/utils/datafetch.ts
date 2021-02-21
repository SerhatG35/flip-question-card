import { QuestionType } from 'global';

export const getCategories = async (setCategory) => {
  const res = await fetch('https://opentdb.com/api_category.php');
  const data = await res.json();
  setCategory(data?.trivia_categories);
};

export const fetchQuestions = async ({
  quantity = 1,
  category = 9,
  difficulty = '',
}) => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${quantity}&category=${category}&difficulty=${difficulty}`
  );
  const { results = [] } = await res.json();
  return results as QuestionType[];
};
