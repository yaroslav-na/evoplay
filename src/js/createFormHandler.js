/**
 *
 * @param {HTMLElement} form
 * @returns formHandler
 */
export function createFormHandler(form) {
  return function (event) {
    event.preventDefault();

    for (const formElement of event.currentTarget) {
      if (formElement.value) {
        formElement.value = "";
      }
    }
  };
}
