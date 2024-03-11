import React, { useContext } from "react";
import { useFetch } from "../../utils/useFetch";
import SortData from "../../utils/sortData";
import HomeColumn from "../HomeColumn";
import { DataContext } from "../../utils/DataContext";
import "./Kanban.css";
import Heading1 from "../Typography/Heading1";

const Kanban = () => {
  const [user, task, isLoading] = useFetch();

  const { groupType, sortType } = useContext(DataContext);
  const result = SortData(task, user, groupType, sortType);

  let data = Object.entries(result);

  if (isLoading) {
    return <Heading1>Loading...</Heading1>;
  }

  return (
    <div className="Column-Container">
      {data.map((entry) => {
        return <HomeColumn data={entry} key={entry[0]} />;
      })}
    </div>
  );
};

export default Kanban;
