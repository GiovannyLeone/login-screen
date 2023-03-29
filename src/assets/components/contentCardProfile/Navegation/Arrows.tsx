import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({
  children,
  disabled,
  onClick
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    items,
    scrollToItem,
    getItemElementById
  } = React.useContext(VisibilityContext);

  return (
    <Arrow
      disabled={false}
      onClick={() => {
        if (isFirstItemVisible) {
        } else {
          scrollPrev();
        }
      }}
    >
      Left
    </Arrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    items,
    scrollToItem,
    getItemElementById
  } = React.useContext(VisibilityContext);

  return (
    <Arrow
      disabled={false}
      onClick={() => {
        if (isLastItemVisible) {
        } else {
          scrollNext();
        }
      }}
    >
      Right
    </Arrow>
  );
}
