import HeadSection from './HeadSection';
import SelectSection from './SelectSection.js';

const SelectionMenu = ({ setData, data, setIsLoading }) => {
  return (
    <div className="selectionMenu">
      <HeadSection />
      <SelectSection
        setData={setData}
        data={data}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default SelectionMenu;
