import React, { useState } from "react";
import { Date } from "./Date";
import { iconPosition } from "./Date.levers";

export default {
  title: "Simple/Date",
  component: Date,
  argTypes: {
    position: {
      control: {
        type: "inline-radio",
        options: iconPosition,
      },
    },
  },
};

const DateTemplate = ({ ...rest }) => {
  const [value, setValue] = useState("2021-09-02");

  const onChange = (val) => {
    setValue(val);
  };

  return (
    <Date
      {...rest}
      onChange={onChange}
      id="date-input-id"
      label="Date Button"
      value={value}
      type="date"
    />
  );
};

export const Default = DateTemplate.bind({});
Default.args = {
  position: "right",
};
Default.storyName = "Date type date";
