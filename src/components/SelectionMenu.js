import HeadSection from "./HeadSection";
import SelectSection from "./SelectSection.js";

const SelectionMenu = ({ setData, data }) => {
  return (
    <div className="selectionMenu">
      <HeadSection />
      <SelectSection setData={setData} data={data}/>
    </div>
  );
};

export default SelectionMenu;
