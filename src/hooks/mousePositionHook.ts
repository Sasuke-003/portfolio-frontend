import { useEffect, useState } from "react";

/**
 * Represents the position of the mouse on the screen.
 * @typedef {{x: number, y: number}} MousePosition
 */

/**
 * Type definition for the MousePosition object.
 * @property {number} x - The x-coordinate of the mouse.
 * @property {number} y - The y-coordinate of the mouse.
 */
type MousePosition = {
    // The x-coordinate of the mouse.
    x: number,
    // The y-coordinate of the mouse.
    y: number,
}


/**
 * Custom hook to track the mouse position.
 * @returns {MousePosition} Object with the current x and y coordinates of the mouse.
 */
export function useMousePosition(): MousePosition {
  // State to store the mouse position
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  // Effect to add event listener for mousemove event
  useEffect(() => {
    // Event handler for mousemove event
    const handleMouseMove = (event: MouseEvent) => {
      // Update the mouse position state
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mousemove event
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Return the current mouse position
  return mousePosition;
}

