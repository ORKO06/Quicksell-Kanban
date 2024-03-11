import React, { useContext } from "react";
import ColumnHeader from "./ColumnHeader";

import "./HomeColumn.css";
import Card from "./Card";
import { DataContext } from "../utils/DataContext";

const HomeColumn = ({ data }) => {
  const { sortType } = useContext(DataContext);

  let cardData = data[1];

  if (sortType === "Priority") {
    cardData.sort((a, b) => b.priority - a.priority);
  }

  if (sortType === "Title") {
    cardData.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <span>
      <ColumnHeader
        title={data[0]}
        num={data[1].length}
        userStatus={data[1][0]?.profileStatus}
        type={data[1][0]?.type}
      />
      <div className="Column-Card-Container">
        {cardData?.map((dat) => (
          <Card data={dat} key={dat.id} />
        ))}
      </div>
    </span>
  );
};

export default HomeColumn;
