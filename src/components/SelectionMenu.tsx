import React from 'react'
import { QuestionType } from 'global';
import HeadSection from './HeadSection';
import SelectSection from './SelectSection';

type SelectionMenuProps = {
  setData: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectionMenu = ({ setData, setIsLoading }: SelectionMenuProps) => {
  return (
    <div className="selectionMenu">
      <HeadSection />
      <SelectSection setData={setData} setIsLoading={setIsLoading} />
    </div>
  );
};

export default SelectionMenu;
