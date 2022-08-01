const formData = document.querySelector('#form');
const submitButton = document.querySelector('#submitButton');
const $firstName = document.querySelector('#firstName');
const $lastName = document.querySelector('#lastName');
const $checkBox = document.querySelector('#checkbox');
const $email = document.querySelector('#email');

formData.addEventListener('submit', handleSubmit);
$firstName.addEventListener('change', toggleButton);
$lastName.addEventListener('change', toggleButton);
$checkBox.addEventListener('click', toggleEmail);

submitButton.disabled = true;
let subscribeButtonClicked = false;

function handleSubmit(event) {
  event.preventDefault();
  alert(`Hi, my name is ${formData.firstName.value} ${formData.lastName.value}`);
  const values = {
    firstName: formData.firstName.value,
    lastName: formData.lastName.value,
    isSubscribed: subscribeButtonClicked,
    ...(formData.email.value && { email: formData.email.value }),
    comments: formData.comments.value
  };
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(() => {
      alert(`Thanks for your submission, ${values.firstName}`);
      formData.reset();
    })
    .catch('Oops, something went wrong');
  submitButton.disabled = true;
  subscribeButtonClicked = false;
  $email.classList.add('display-none');
}

function toggleButton(event) {
  if ($firstName.value && $lastName.value) {
    submitButton.disabled = false;
  }
}

function toggleEmail(event) {
  if (event && subscribeButtonClicked === false) {
    subscribeButtonClicked = true;
    $email.classList.remove('display-none');
  } else {
    subscribeButtonClicked = false;
    $email.classList.add('display-none');
  }
}
