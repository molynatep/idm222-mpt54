// Get the modal
const modal = document.getElementById('myModal');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const images = document.getElementsByClassName('art')

// Go through all of the images with our custom class
for (let i = 0; i < images.length; i++) {
    const img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
};