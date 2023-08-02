const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})


const imagePaths = [
  "https://drive.google.com/uc?export=view&id=1wR4EKxuQCTBhFRt9BWdxCmsYAUYHBeK2",
  "https://drive.google.com/uc?export=view&id=1DIfMpWOQ956eYglBa0GSKU8RHt9JDf7o",
  "https://drive.google.com/uc?export=view&id=1-pNcvNPJ88FISzhMF1HSXp-ru-Dv6qPC",
  "https://drive.google.com/uc?export=view&id=1eJJB-Z3TPVgUQXiVFbny6iO71kc7Sp5o",
  "https://drive.google.com/uc?export=view&id=1AcQCsjWcj7-DU2cnG0YH6432ged0qMw2",
  "https://drive.google.com/uc?export=view&id=1gCIWjWEjGjq4Mm2sGmQO3mJPCZ7VHKAw"
];

const updateImage = (i) => {
  let path = imagePaths[i];
  largeImage.src = path;
  imageName.innerHTML = path;
  imageIndex.innerHTML = `0${i+1}`;
  index = i;
}



closeBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})

function goToNextPage() {
  window.location.href = "Project.html";

}