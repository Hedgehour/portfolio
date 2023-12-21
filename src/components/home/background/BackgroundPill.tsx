import type { Component } from "solid-js";
import { setSection, type BackgroundSection } from "./background.signals";

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
      class="flex justify-center cursor-pointer rounded-full border border-gray-400 bg-white py-2 px-4 hover:bg-[#9e4b45] focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-[#9e4b45] hover:text-white transition-all duration-300 ease-in-out"
    >
      {props.value}
    </label>
  );
};
