import HeadSection from "./HeadSection";
import SelectSection from "./SelectSection.js";

const SelectionMenu = ({ setData, setOptions, data }) => {
  return (
    <div className="selectionMenu">
      <HeadSection />
      <SelectSection setData={setData} setOptions={setOptions} data={data} />
    </div>
  );
};

export default SelectionMenu;
