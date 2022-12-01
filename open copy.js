
const elements = document.querySelectorAll('.door');
const elementium = document.querySelectorAll('.backDoor')
const date = new Date()
day = date.getDate()

console.log(day)




// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function abc(day){ 
  modal.style.display = "block";
  modalImg.src = img[day].src;
  captionText.innerHTML = img[day].alt;
  console.log('lolll');
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

/*
elements[0].addEventListener('click', function onClick() {
  var element = elements[0]
  console.log('box clicked');
  element.classList.toggle("doorOpen");
  if (element.className === "door") {
    element.classList.toggle("doorOpen");
    }

  else if (element.className != "door") { 
    abc(0);
    };
});

elements[1].addEventListener('click', function onClick() {
  var element = elements[1]
  console.log('box clicked');
  element.classList.toggle("doorOpen");
  if (element.className === "door") {
    element.classList.toggle("doorOpen");
    }

  else if (element.className != "door") { 
    abc(1);
    };
});

elementium[1].addEventListener('click', function adla() {
  abc(1);
})

elementium[0].addEventListener('click', function adla() {
  abc(0);
  checkday();
}) */


function checkday() {
  for (let days = 0; days <= day-1; days++) {
    elements[days].addEventListener('click', function bla(){
      elements[days].classList.toggle('doorOpen');
      abc(days);
    }) 
  }
}
checkday()
/*
    for (const element of elements) {
  
      element.addEventListener('click', function efg() {
        console.log('lol');

        if (element.className === "door") {
          element.classList.toggle("doorOpen");
          }

        else if (element.className != "door") { 
          open();
          };

    })
  }
  function open() {
  for (var i=0; i<= 23; ++i) {
    elementium[i].onClick = abc();
    console.log(i)
    } 
  } */
