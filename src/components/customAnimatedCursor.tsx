import AnimatedCursor from "react-animated-cursor";

/**
 * Constants for the cursor styles and sizes.
 */

// Size of the outer cursor
const OUTER_CURSOR_SIZE = 80;

// Scale factor for the cursor on click
const OUTER_CURSOR_SCALE_ON_CLICK = 1.2;

// CSS styles for the outer cursor
const OUTER_CURSOR_STYLE: React.CSSProperties = {
  border: "1px solid #ffffff",
  backgroundColor: "#1111110",
};

// Speed of the cursor trail
const OUTER_CURSOR_TRAILING_SPEED = 10;

// Size of the inner cursor
const INNER_CURSOR_SIZE = 10;

// Scale factor for the inner cursor on click
const INNER_CURSOR_SCALE_ON_CLICK = 0.8;

// CSS styles for the inner cursor
const INNER_CURSOR_STYLE: React.CSSProperties = {
  border: "1px solid #ffffff",
  backgroundColor: "#ffffff",
};

/**
 * A custom animated cursor component.
 * @returns {JSX.Element} The custom animated cursor component.
 */
export default function CustomAnimatedCursor(): JSX.Element {
  return (
    <AnimatedCursor
      outerSize={OUTER_CURSOR_SIZE}
      outerScale={OUTER_CURSOR_SCALE_ON_CLICK}
      outerStyle={OUTER_CURSOR_STYLE}
      trailingSpeed={OUTER_CURSOR_TRAILING_SPEED}
      innerSize={INNER_CURSOR_SIZE}
      innerScale={INNER_CURSOR_SCALE_ON_CLICK}
      innerStyle={INNER_CURSOR_STYLE}
    />
  );
}
