
const elements = document.querySelectorAll('.door');
const elementium = document.querySelectorAll('.backDoor')

elements[0].addEventListener('click', function onClick() {
  console.log('box clicked');
});





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
  }

  
