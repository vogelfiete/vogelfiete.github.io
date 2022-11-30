
const elements = document.querySelectorAll('.door');
const elementium = document.querySelectorAll('.backDoor')







// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function abc(){ 
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  console.log('lolll');
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


elements[0].addEventListener('click', function onClick() {
  var element = elements[0]
  console.log('box clicked');
  element.classList.toggle("doorOpen");
  if (element.className === "door") {
    element.classList.toggle("doorOpen");
    }

  else if (element.className != "door") { 
    abc();
    };
});

elementium[0].addEventListener('click', function adla() {
  abc();
})

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

  
