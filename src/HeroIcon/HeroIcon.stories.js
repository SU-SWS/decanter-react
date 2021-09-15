import React from "react";
import HeroIcon from "./HeroIcon";

export default {
  title: "Simple/Hero Icon",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0",
    },
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const HeroIconTemplate = () => <HeroIcon />;
export const Default = HeroIconTemplate.bind({});
Default.args = {};
