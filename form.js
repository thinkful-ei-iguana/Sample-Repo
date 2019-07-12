'use strict';
/* global $ */

function serializeJson(form) {
  const formData = new FormData(form);
  const o = {};
  formData.forEach((val, name) => o[name] = val);
  return JSON.stringify(o);
}

$('#contactForm').submit(event => {
  event.preventDefault();
  // These two lines are THE SAME
  // let formElement = document.querySelector("#contactForm");
  let formElement = $('#contactForm')[0];
  // the [0] here selects the native element
  console.log( serializeJson(formElement) );

  $('#contactForm').html(`
    <p>Your form submission has been received!</p>
  `);
});
