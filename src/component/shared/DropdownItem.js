import React from 'react';
import './DropDownItem.css'

const DropdownItem = ({data, onChangeHandler,selected}) => {

  return (
    <select className='select-container' value={selected} onChange={e=>{
      onChangeHandler(e.target.value);
    }} >
      {data.map((datas)=>
        <option className='select-items' value={datas} key={datas}>
          {datas}
        </option>
      )}
      
    </select>
  )
}

export default DropdownItem