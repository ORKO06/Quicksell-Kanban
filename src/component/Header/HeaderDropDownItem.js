import Heading1 from "../Typography/Heading1"
import DropdownItem from "../shared/DropdownItem"
import './HeaderDropDownItem.css'

const HeaderDropDownItem = ({name,data,onChangeHandler,selected}) => {
  return (
    <div className="Header-DropDown-Container" >
        <Heading1 classes="Grouping-Style" >{name}</Heading1>
        <DropdownItem data={data} onChangeHandler={onChangeHandler} selected={selected} />
    </div>
  )
}

export default HeaderDropDownItem