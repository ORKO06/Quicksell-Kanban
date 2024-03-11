import { createContext, useEffect, useState } from "react";

const defaultValue = {
  groupType: "",
  sortType: "",
};

export const DataContext = createContext(defaultValue);

const DataContextProvider = ({ children }) => {
  const group = localStorage.getItem("groupType");
  const initialGroup = group ? JSON.parse(group) : "Status";
  const sort = localStorage.getItem("sortType");
  const initialSort = sort ? JSON.parse(sort) : "Priority";

  const [groupType, setGroupType] = useState(initialGroup);
  const [sortType, setSortType] = useState(initialSort);

  const value = {
    groupType,
    sortType,
    setGroupType,
    setSortType,
  };

  useEffect(() => {
    localStorage.setItem("groupType", JSON.stringify(groupType));
    localStorage.setItem("sortType", JSON.stringify(sortType));
  }, [groupType, sortType]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
