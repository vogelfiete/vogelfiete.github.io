
const elements = document.querySelectorAll('.door');

elements[0].addEventListener('click', function onClick() {
  console.log('box clicked');
});

for (const element of elements) {
  element.addEventListener('click', function onClick() {
    console.log('lol');
    element.classList.toggle("doorOpen");
  })
}

