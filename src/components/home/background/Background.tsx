import { BackgroundPill } from "./BackgroundPill";
import { BackgroundContent } from "./BackgroundContent";

export const Background = () => (
  <div class="flex flex-col">
    <div class="grid max-w-full w-full grid-cols-3 gap-3 px-8 mx-auto ">
      <BackgroundPill value="Profile" />
      <BackgroundPill value="Education" />
      <BackgroundPill value="Skills" />
    </div>
    <div>
      <BackgroundContent />
    </div>
  </div>
);
