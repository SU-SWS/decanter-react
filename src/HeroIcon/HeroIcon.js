import React from "react";
import { dcnb } from "cnbuilder";
import { VideoCameraIcon, MicrophoneIcon } from "@heroicons/react/outline";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
  MailIcon,
  PlayIcon,
} from "@heroicons/react/solid";
import { SrOnlyText } from "../SrOnlyText/SrOnlyText";

const HeroIcon = ({ iconType, srText, isAnimate, className, ...props }) => {
  const heroIconMap = {
    video: {
      heroicon: VideoCameraIcon,
      baseStyle: "su-w-08em su-mt-[-0.2em]",
      animate: "group-hocus:su-translate-x-02em",
    },
    play: {
      heroicon: PlayIcon,
      baseStyle: "su-w-08em su-ml-7 su--mt-3",
      animate: "group-hocus:su-translate-x-02em",
    },
    podcast: {
      heroicon: MicrophoneIcon,
      baseStyle: "su-w-08em su-mt-[-0.25em]",
      animate: "group-hocus:su-translate-x-02em",
    },
    external: {
      heroicon: ArrowRightIcon,
      baseStyle: "su-w-08em su-ml-02em su--rotate-45 group-hocus:su--rotate-45",
      animate:
        "group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em",
    },
    "arrow-right": {
      heroicon: ArrowRightIcon,
      baseStyle: "su-w-08em su-ml-03em su--mt-02em",
      animate: "group-hocus:su-translate-x-02em",
    },
    download: {
      heroicon: DownloadIcon,
      baseStyle: "su-w-08em su-ml-4 su--mt-3",
      animate: "group-hocus:su-translate-y-02em",
    },
    email: {
      heroicon: MailIcon,
      baseStyle: "su-w-08em su-ml-7 su--mt-2",
      animate: "group-hocus:su-translate-x-02em",
    },
    "chevron-down": {
      heroicon: ChevronDownIcon,
      baseStyle: "su-w-[1.1em] su-ml-4 su--mt-3",
      animate: "group-hocus:su-translate-y-02em",
    },
    "chevron-right": {
      heroicon: ChevronRightIcon,
      baseStyle: "su-w-1em su-ml-02em su--mt-4",
      animate: "group-hocus:su-translate-x-02em",
    },
  };

  const Icon = heroIconMap[iconType].heroicon;
  let animateStyle = "";

  if (isAnimate) {
    animateStyle = dcnb("su-transform-gpu", heroIconMap[iconType].animate);
  }

  const heroIconStyle = dcnb(
    "su-transition",
    heroIconMap[iconType].baseStyle,
    animateStyle
  );

  return (
    <>
      <Icon
        aria-hidden="true"
        className={dcnb(heroIconStyle, className)}
        {...props}
      />
      {srText && <SrOnlyText srText={srText} />}
    </>
  );
};

export default HeroIcon;
