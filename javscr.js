const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",

    // Add more image URLs here
  ];
  
  let currentIndex = 0;
  const mainImage = document.getElementById('main-image');
  const filmStrip = document.getElementById('film-strip');
  
  // Function to display current image
  function displayImage(index) {
    mainImage.src = images[index];
    mainImage.alt = `Nature Image ${index + 1}`;
  }
  
  // Function to display film strip
  function displayFilmStrip() {
    filmStrip.innerHTML = '';
    images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = `Nature Image ${index + 1}`;
      img.onclick = () => displayImage(index);
      filmStrip.appendChild(img);
    });
  }
  
  // Initial setup
  displayImage(currentIndex);
  displayFilmStrip();
  
  // Navigation functions
  function previousImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    displayImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    displayImage(currentIndex);
  }
  
  function firstImage() {
    currentIndex = 0;
    displayImage(currentIndex);
  }
  
  function lastImage() {
    currentIndex = images.length - 1;
    displayImage(currentIndex);
  }
  
  function shuffleImages() {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    displayImage(currentIndex);
    displayFilmStrip();
  }
  