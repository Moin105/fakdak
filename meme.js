const imageFolderPath = "./meme/"; // Update this path to your images folder
const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.jpeg",
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
  "32.png",
  "33.png",
  "34.png",
  "35.jpeg",
  "36.jpeg",
  "37.jpeg",
  "38.png",
  "39.jpeg",
  "40.png",
  "41.jpeg",
  "42.jpeg",
  "43.jpeg",
  "44.gif",
  "45.jpeg",
  "46.png",
  "47.png",
  "48.png",
  "49.png",
  "50.png",
  "51.png",
  "52.png",
  "53.png",
  "54.png",
  "55.png",
  "56.png",
  "57.png",
  "58.png",
  "59.png",
  "60.png",
  "61.png",
  "62.png",
  "63.png",
  "64.png",
  "65.png",
  "66.png",
  "67.png",
  "68.png",
  "69.png",
  "70.png",
  "71.png",
  "72.png",
  "73.png",
  "74.png",
  "75.png",
  "76.png",
  "77.png",
  "78.png",
  "79.png",
  "80.png",
  "81.png",
  "82.png",
  "83.png",
  "84.png",
  "85.png",
  "86.png",
  "87.png",
  "88.png",
  "89.png",
  "90.png",
  "91.png",
  "92.png",
  "93.png",
  "94.png",
  "95.png",
  "96.png",
  "97.png",
  "98.png",
  "99.png",
  "100.png",
  "101.png",
  "102.png",
  "103.png",
  "104.png",
  "105.png",
  "106.png",
  "107.png",
  "108.png",
  "109.png",
  "110.png",
  "111.png",
  "112.png",
  "113.png",
  "114.png",
  "115.png",
  "116.png",
  "117.png",
  "118.png",
  "119.png",
  "120.png",
  "121.png",
  "122.png",
  "123.png",
  "124.png",
  "125.png",
  "126.png",
  "127.png",
  "128.png",
  "129.png",
  "130.png",
  "131.png",
  "132.png",
  "133.png",
  "134.png",
  "135.png",
  "136.png",
  "137.png",
  "138.png",
  "139.png",

  // Add more image file names
];
document.addEventListener("DOMContentLoaded", () => {
  selectedFromGallery = false; // Ensure initial state
  loadGallery();
  getRandomImage();
  openTab('galleryTab'); 
});

let selectedFromGallery = false;

function loadGallery() {
  const gallery = document.getElementById("gallery");
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageFolderPath + image;
    imgElement.alt = image;
    imgElement.addEventListener("click", () => {
      showSelectedImage(image);
      openTab('randomTab', false); // Open random image tab without generating a new random image
    });
    gallery.appendChild(imgElement);
  });
}

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  const randomImageElement = document.getElementById("randomImage");
  randomImageElement.src = imageFolderPath + randomImage;
  randomImageElement.alt = randomImage;
  selectedFromGallery = false; // Reset the flag when generating a random image
}

function showSelectedImage(image) {
  selectedFromGallery = true;
  const randomImageElement = document.getElementById("randomImage");
  randomImageElement.src = imageFolderPath + image;
  randomImageElement.alt = image;
}

function copyImage() {
  const randomImageElement = document.getElementById("randomImage");
  const imgURL = randomImageElement.src;
  navigator.clipboard
    .writeText(imgURL)
    .then(() => {
      alert("Image URL copied to clipboard");
    })
    .catch((err) => {
      alert("Failed to copy image URL: " + err);
    });
}

function downloadImage() {
  const randomImageElement = document.getElementById("randomImage");
  const imgURL = randomImageElement.src;
  const a = document.createElement("a");
  a.href = imgURL;
  a.download = randomImageElement.alt;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function openTab(tabId, generateRandom = true) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => (tab.style.display = "none"));
  
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    if (tabId === 'randomTab' && generateRandom && !selectedFromGallery) {
      // getRandomImage();
    }
    targetTab.style.display = "block";
  } else {
    console.error(`Tab with id ${tabId} does not exist.`);
  }
}
