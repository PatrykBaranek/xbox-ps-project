const xbxBtn = document.querySelector(".xbx-btn");
const psBtn = document.querySelector(".ps-btn");

const navBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
const allNavItems = document.querySelectorAll(".nav__item");

const divSwitch = document.querySelector(".switch");
const playstationSection = document.querySelector(".playstation-section");

const header = document.querySelector(".header");
const headerWallpapersArray = [
	"./img/playstation/ps-header/horizon-wallpaper.gif",
	"./img/playstation/ps-header/uncharted-wallpaper.gif",
	"./img/playstation/ps-header/ghostoftsushima-wallpaper.gif",
	"./img/playstation/ps-header/tlou2-wallpaper.gif",
	"./img/playstation/ps-header/spiderman-wallpaper.gif",
	"./img/playstation/ps-header/death-wallpaper.gif",
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

navBtn.addEventListener("click", handleNav);

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

setInterval(changePlayStationHeaderWallpaper, 2500);

// Start Page
xbxBtn.addEventListener("click", () => {
	psBtn.classList.add("hide");
	xbxBtn.classList.add("from-left-to-right");
	xbxBtn.classList.add("to-main-page-animation");
});

psBtn.addEventListener("click", () => {
	xbxBtn.classList.add("hide");
	psBtn.classList.add("from-right-to-left");
	psBtn.classList.add("to-main-page-animation");
	// playstationSection.style.zIndex = "-9999";
	setTimeout(() => {
		divSwitch.classList.toggle("hide");
		playstationSection.classList.toggle("hide");
		// playstationSection.style.zIndex = "0";
	}, 2300);
});
