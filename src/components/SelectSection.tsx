import { useState, useEffect, useRef } from 'react';

import { getCategories } from '../utils/datafetch';
import Button from './Button';
import { numberOfQuestions, difficulties } from '../utils/index';
import { QuestionType } from 'global';

type SelectionMenuProps = {
  setData: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectSection = ({ setData, setIsLoading }: SelectionMenuProps) => {
  const [categories, setCategories] = useState([]);

  const inputQuantity = useRef<HTMLSelectElement>(null);
  const inputCategory = useRef<HTMLSelectElement>(null);
  const inputDif = useRef<HTMLSelectElement>(null);

  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleQuantity = () => {
    setQuantity(
      inputQuantity?.current.options[inputQuantity?.current.selectedIndex].text
    );
  };
  const handleCategory = () => {
    setCategory(
      inputCategory.current.options[inputCategory.current.selectedIndex].value
    );
  };
  const handleDifficulty = () => {
    setDifficulty(
      inputDif.current.options[inputDif.current.selectedIndex].value
    );
  };

  useEffect(() => {
    getCategories(setCategories);
  }, []);
  return (
    <div className="selectSection">
      <select
        name=""
        id="quantity"
        ref={inputQuantity}
        onChange={handleQuantity}
      >
        <option value="" defaultValue="" hidden>
          Number of Questions
        </option>
        {numberOfQuestions.map((num, index) => (
          <option key={index}>{num}</option>
        ))}
      </select>
      <select
        name=""
        id="categories"
        ref={inputCategory}
        onChange={handleCategory}
      >
        <option value="" defaultValue="" hidden>
          Pick Category
        </option>
        {categories.map((category) => {
          return (
            <option key={category?.id} value={category?.id}>
              {category?.name}
            </option>
          );
        })}
      </select>
      <select
        name=""
        id="difficulty"
        ref={inputDif}
        onChange={handleDifficulty}
      >
        <option value="" defaultValue="" hidden>
          Select Difficulty
        </option>
        {difficulties.map((diff, index) => (
          <option key={index} value={diff.toLowerCase()}>
            {diff}
          </option>
        ))}
      </select>
      <Button
        quantity={quantity}
        category={category}
        difficulty={difficulty}
        setData={setData}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default SelectSection;
