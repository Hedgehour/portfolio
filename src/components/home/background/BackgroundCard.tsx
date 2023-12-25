import type { ParentComponent } from "solid-js";

/* old classes
transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1
*/

export const BackgroundCard: ParentComponent = (props) => (
  <div class="bg-white p-6 mt-2 rounded-lg shadow-md mx-auto transition-all duration-500 ease-in-out">
    {props.children}
  </div>
);
