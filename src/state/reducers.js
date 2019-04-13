const initialState = {
  isNavOpen: false,
  isDarkMode: false,
  navbarLinks: [
    { name: `About`, to: `/about` },
    { name: `Tutorials`, to: `/tutorials` },
    { name: `Graphic Design`, to: `/designs` },
  ],
}

const TOGGLE_NAVBAR = `TOGGLE_NAVBAR`
export const toggleNavBar = isNavOpen => ({
  type: TOGGLE_NAVBAR,
  isNavOpen,
})

const TOGGLE_DARKMODE = `TOGGLE_DARKMODE`
export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode }

    case TOGGLE_NAVBAR:
      return { ...state, isNavOpen: action.isNavOpen }
    default:
      return state
  }
}
