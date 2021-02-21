export interface QuestionType {
  category: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface CategoryType{
  id:number
  name:string
}