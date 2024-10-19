import React from "react";
import INormalButton from "../../../interfaces/components/INormalButton";

const NormalButton = (props: INormalButton<React.MouseEvent<HTMLElement>>) => {
  return <button className="normal_button" onClick={props.fn}>{props.label}</button>;
};

export default NormalButton;
