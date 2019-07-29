export const TOGGLE_NAVBAR = `TOGGLE_NAVBAR`;

export const toggleNavBar = isNavOpen => ({
  type: TOGGLE_NAVBAR,
  isNavOpen,
});

export const TOGGLE_DARKMODE = `TOGGLE_DARKMODE`;
export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
});
