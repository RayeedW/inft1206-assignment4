// Image gallery script

// Get the thumbnails and large preview image
const thumbnails = document.querySelectorAll('.thumbnails img');
const largeImage = document.getElementById('largeImage');

// When a thumbnail is clicked or activated with Enter key,
// show it in the large preview area
thumbnails.forEach((thumb) => {
  // click handler
  thumb.addEventListener('click', () => {
    showImage(thumb);
  });

  // keyboard accessibility: allow Enter key
  thumb.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      showImage(thumb);
    }
  });
});

// helper function: sets preview image to the selected thumbnail
function showImage(thumb) {
  largeImage.src = thumb.src;   // show the same image but larger
  largeImage.alt = thumb.alt;
}

