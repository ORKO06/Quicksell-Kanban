import { BsCheckCircleFill, BsCircle } from "react-icons/bs";

import Heading1 from "./Typography/Heading1";
import Heading2 from "./Typography/Heading2";
import { TbAlertSquareFilled, TbCircleDotted } from "react-icons/tb";
import { PiCircleHalfFill } from "react-icons/pi";
import {
  MdOutlineCancel,
  MdSignalCellular1Bar,
  MdSignalCellular3Bar,
  MdSignalCellular4Bar,
} from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "./Card.css";
import UserProfile from "./shared/UserProfile";

const icon = {
  Backlog: (
    <TbCircleDotted size={"12px"} color="#BDC1C7" className="Status-Icon" />
  ),
  Done: (
    <BsCheckCircleFill size={"12px"} color="#5E6AD2" className="Status-Icon" />
  ),
  "In progress": (
    <PiCircleHalfFill size={"12px"} color="#F0C846" className="Status-Icon" />
  ),
  Cancelled: (
    <MdOutlineCancel size={"12px"} color="#92A0B1" className="Status-Icon" />
  ),
  Todo: <BsCircle size={"12px"} color="#E1E1E1" className="Status-Icon" />,
  4: (
    <TbAlertSquareFilled
      size={"12px"}
      color="#FC7840"
      className="Priority-Icon"
    />
  ),
  3: (
    <MdSignalCellular4Bar
      size={"12px"}
      color="#6B6F76"
      className="Priority-Icon"
    />
  ),
  2: (
    <MdSignalCellular3Bar
      size={"12px"}
      color="#6B6F76"
      className="Priority-Icon"
    />
  ),
  1: (
    <MdSignalCellular1Bar
      size={"12px"}
      color="#6B6F76"
      className="Priority-Icon"
    />
  ),
  0: (
    <HiOutlineDotsHorizontal
      size={"12px"}
      color="#787C83"
      className="Priority-Icon"
    />
  ),
};

const Card = ({ data }) => {
  return (
    <div className="Card-Container">
      <div className="Card-ID-Container">
        <Heading2 classes={"Card-ID"}>{data.id}</Heading2>
        {data.userName && (
          <UserProfile name={data.userName} userStatus={data.userStatus} />
        )}
      </div>
      <div className="text">
        {data.status && <span>{icon[data.status]}</span>}
        <Heading1 classes="Card-Title">{data.title}</Heading1>
      </div>
      <div className="Card-Status-Container">
        {data.priority || data.priority === 0 ? (
          <div className="Card-Priority-Status">{icon[data.priority]}</div>
        ) : null}
        <div className="Card-Feature-Tag">
          <span className="Feature-Tag-Circle"></span>
          <Heading2 classes={"Card-Tag"}>{data.tag[0]}</Heading2>
        </div>
      </div>
    </div>
  );
};

export default Card;
