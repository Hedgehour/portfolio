import type { Component } from "solid-js";
import {
  setSection,
  type BackgroundSection,
  section,
} from "./background.signals";

interface BackgroundPillProps {
  value: BackgroundSection;
}

export const BackgroundPill: Component<BackgroundPillProps> = (props) => {
  const handleClick = () => {
    setSection(props.value);
  };

  return (
    <label
      onClick={handleClick}
      classList={{
        "flex justify-center cursor-pointer rounded-full border border-gray-400 bg-white py-2 px-4 hover:bg-[#9e4b45] focus:outline-none hover:text-white transition-all duration-300 ease-in-out":
          true,
        "border-transparent ring-2 ring-[#9e4b45]": section() === props.value,
      }}
    >
      {props.value}
    </label>
  );
};
