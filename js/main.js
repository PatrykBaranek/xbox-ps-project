const xbxBtn = document.querySelector(".xbx-btn");
const psBtn = document.querySelector(".ps-btn");

const navBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
const allNavItems = document.querySelectorAll(".nav__item");

// Xbox
const navBtnXbox = document.querySelector(".burger-btn-xbox");
const navXbox = document.querySelector(".nav-xbox");
const allNavItemsXbox = document.querySelectorAll(".nav__item-xbox");

const divSwitch = document.querySelector(".switch");
const playstationSection = document.querySelector(".playstation-section");
const xboxSection = document.querySelector(".xbox-section");

const header = document.querySelector(".header");
const headerXbox = document.querySelector(".header-xbox");

const headerWallpapersArray = [
	"./img/playstation/ps-header/horizon-wallpaper.gif",
	"./img/playstation/ps-header/uncharted-wallpaper.gif",
	"./img/playstation/ps-header/ghostoftsushima-wallpaper.gif",
	"./img/playstation/ps-header/tlou2-wallpaper.gif",
	"./img/playstation/ps-header/spiderman-wallpaper.gif",
	"./img/playstation/ps-header/death-wallpaper.gif",
];

const headerXboxWallpapersArray = [
	"./img/xbox/header-section/forza-horizon.gif",
	"./img/xbox/header-section/cyberpunk.gif",
	"./img/xbox/header-section/hades.gif",
	"./img/xbox/header-section/halo.gif",
	"./img/xbox/header-section/yakuza-like-a-dragon.gif",
	"./img/xbox/header-section/batman.gif",
];

// Nav animation handler
const handleNav = () => {
	nav.classList.toggle("nav--active");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const handleNavXbox = () => {
	navXbox.classList.toggle("nav--active");

	allNavItemsXbox.forEach((item) => {
		item.addEventListener("click", () => {
			navXbox.classList.remove("nav--active");
		});
	});

	handleNavItemsAnimationXbox();
};

const handleNavItemsAnimationXbox = () => {
	let delayTime = 0;

	allNavItemsXbox.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

navBtn.addEventListener("click", handleNav);
navBtnXbox.addEventListener("click", handleNavXbox);

// Header changing wallpaper

let index = 0;

const changePlayStationHeaderWallpaper = () => {
	if (index > headerWallpapersArray.length - 1) {
		index = 0;
	}
	// console.log(`url: ${headerWallpapersArray[index]}, index: ${index}`);
	header.style.backgroundImage = "url(" + headerWallpapersArray[index] + ")";

	index++;
};

const changeXboxHeaderWallpaper = () => {
	if (index > headerXboxWallpapersArray.length - 1) {
		index = 0;
	}
	// console.log(`url: ${headerWallpapersArray[index]}, index: ${index}`);
	headerXbox.style.backgroundImage =
		"url(" + headerXboxWallpapersArray[index] + ")";

	index++;
};

setInterval(changePlayStationHeaderWallpaper, 2500);
setInterval(changeXboxHeaderWallpaper, 2500);

// Start Page
xbxBtn.addEventListener("click", () => {
	psBtn.classList.add("hide");
	xbxBtn.classList.add("from-left-to-right");
	xbxBtn.classList.add("to-main-page-animation");
	setTimeout(() => {
		divSwitch.classList.add("hide");
		xboxSection.classList.remove("hide");
	}, 2300);
});

psBtn.addEventListener("click", () => {
	xbxBtn.classList.add("hide");
	psBtn.classList.add("from-right-to-left");
	psBtn.classList.add("to-main-page-animation");

	setTimeout(() => {
		divSwitch.classList.add("hide");
		playstationSection.classList.remove("hide");
	}, 2300);
});
