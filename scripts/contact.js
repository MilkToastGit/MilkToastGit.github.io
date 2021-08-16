const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
let form;
window.addEventListener('load', function() {
  form = document.forms[0];
  form.onsubmit = function() {SendEmail(event);};
});

function SendEmail(event)
{
  let email = form.elements['email'].value;
  if (!emailRegex.test(email))
  {
    alert('Please enter a valid email address');
    event.preventDefault();
    return false;
  }

  let subject = 'Enquiry from ' + form.elements['name'].value;
  let message = form.elements['message'].value;

  window.open(`mailto:ryanvigus@gmail.com?subject=${subject}&body=${message}`);
  return true;
}
