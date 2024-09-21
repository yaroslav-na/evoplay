/**
 *
 * @param {HTMLElement} page
 * @param {HTMLElement} header
 * @param {HTMLElement} burgerIcon
 * @returns
 */
export function createMenu(page, header, burgerIcon) {
  const CONFIG = {
    CSS_VARS: {
      HEADER_HEIGHT: "--header-height",
      HEADER_TOP: "--header-top",
    },
    CLASSES: {
      HEADER: "--js-menu-shown",
      PAGE: "--js-fixed",
    },
    ICONS: {
      SET_ATTRIBUTE: "xlink:href",
      CLOSE_ATTRIBUTE: "data-js-close-icon",
      OPEN_ATTRIBUTE: "data-js-open-icon",
    },
  };
  let isOpen = false;

  function setCSsHeaderHeight() {
    const clientRect = header.getBoundingClientRect();

    document.documentElement.style.setProperty(
      CONFIG.CSS_VARS.HEADER_HEIGHT,
      clientRect.height + "px"
    );

    document.documentElement.style.setProperty(
      CONFIG.CSS_VARS.HEADER_TOP,
      clientRect.top + "px"
    );
  }

  function show() {
    setCSsHeaderHeight();

    isOpen = true;
    page.classList.add(CONFIG.CLASSES.PAGE);
    header.classList.add(CONFIG.CLASSES.HEADER);
    burgerIcon.setAttribute(
      CONFIG.ICONS.SET_ATTRIBUTE,
      burgerIcon.getAttribute(CONFIG.ICONS.OPEN_ATTRIBUTE)
    );
  }

  function hide() {
    isOpen = false;
    page.classList.remove(CONFIG.CLASSES.PAGE);
    header.classList.remove(CONFIG.CLASSES.HEADER);
    burgerIcon.setAttribute(
      CONFIG.ICONS.SET_ATTRIBUTE,
      burgerIcon.getAttribute(CONFIG.ICONS.CLOSE_ATTRIBUTE)
    );
  }
  function toggle() {
    return (isOpen ? hide : show)();
  }

  return { toggle, hide, show };
}
