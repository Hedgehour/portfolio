import type { Component, ParentComponent } from "solid-js";

export interface BackgroundIconProps {
  text: Component;
}

export const BackgroundIcon: ParentComponent<BackgroundIconProps> = (props) => {
  const TextComponent = props.text;

  return (
    <div class="grid justify-center">
      <div class="flex justify-center align-middle">{props.children}</div>
      <TextComponent />
    </div>
  );
};
