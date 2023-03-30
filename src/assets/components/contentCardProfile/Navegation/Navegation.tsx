import React from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import { Button } from "./Button";
import "./scss/style-scroll.scss"

import usePreventBodyScroll from "./ts/usePreventBodyScroll";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "Button";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(2)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function App() {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
        <div className="navegation">
          <ScrollMenu
            onWheel={onWheel}
          >
            {items.map(({ id }) => (
              <Button
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
    </>
  );
}
export default App;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
