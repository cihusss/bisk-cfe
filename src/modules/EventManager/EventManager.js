import { EventDispatcher } from './EventDispatcher';

export const EventManager = (e) => {
  // Get all buttons from dom
  const elements = document.querySelectorAll(
    '.form-btn, .cfe-trigger, .mktoButton'
  );

  // Add event listener to all buttons
  for (let i = 0; i < elements.length; i++) {
    let dataCfe = elements[i].getAttribute('data-cfe');

    elements[i].addEventListener('click', (e) => {
      if (dataCfe !== null) {
        EventDispatcher(dataCfe);
      } else {
        EventDispatcher(elements[i].innerText);
      }
    });
  }
};
