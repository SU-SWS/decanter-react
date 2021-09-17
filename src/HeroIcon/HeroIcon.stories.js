import React from "react";
import { HeroIcon } from "./HeroIcon";
import { heroIconOptions } from "./HeroIcon.levers";

export default {
  title: "Simple/Hero Icon",
  component: HeroIcon,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: heroIconOptions,
      },
    },
    isAnimate: {
      control: {
        type: "boolean",
      },
    },
  },
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
Default.args = {
  icon: "arrow-narrow-right",
  isAnimate: true,
};
Default.storyName = "Default";
