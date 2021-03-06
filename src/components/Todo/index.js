import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Todo() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode);
  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
  );
}
