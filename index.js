const heroImgOnePath = "./assets/images/hero-section-slide-food-1.png";
const heroImgTwoPath = "./assets/images/hero-section-slide-food-2.png";
const heroImgThreePath = "./assets/images/hero-section-slide-food-3.png";
const heroImgFourPath = "./assets/images/hero-section-slide-food-4.png";
const heroImg = document.getElementById("hero-img");

let heroImgIndex = 0;
const heroImgPaths = [heroImgOnePath, heroImgTwoPath, heroImgThreePath, heroImgFourPath];
setInterval(() => {
	heroImgIndex = (heroImgIndex + 1) % heroImgPaths.length;
	heroImg.src = heroImgPaths[heroImgIndex];
}, 3000);
