const header = document.querySelector('header');

console.log(header);

header.addEventListener('click', function (e) {
  console.log(e);

  e.preventDefault();
});
