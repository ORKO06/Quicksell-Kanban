import HeaderDropDownItem from "./HeaderDropDownItem";
import { useContext } from "react";
import { DataContext } from "../../utils/DataContext";
import "./HeaderDropDown.css";

const groupItems = ["Status", "Priority", "Users"];
const sortItems = ["Priority", "Title"];

const HeaderDropDown = ({ onSelect }) => {
  const { groupType, sortType, setGroupType, setSortType } =
    useContext(DataContext);

  const onSelectGroup = (type) => {
    setGroupType(type);
    onSelect();
  };

  const onSelectSort = (type) => {
    setSortType(type);
    onSelect();
  };

  return (
    <div className="HeaderDropDown">
      <HeaderDropDownItem
        name="Grouping"
        data={groupItems}
        onChangeHandler={onSelectGroup}
        selected={groupType}
      />
      <HeaderDropDownItem
        name="Ordering"
        data={sortItems}
        onChangeHandler={onSelectSort}
        selected={sortType}
      />
    </div>
  );
};

export default HeaderDropDown;
