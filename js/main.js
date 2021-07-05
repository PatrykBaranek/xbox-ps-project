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

const gameSectionImagesArray = [
	"./img/playstation/game-section/bloodborne.jpg",
	"./img/playstation/game-section/days_gone.jpg",
	"./img/playstation/game-section/death_stranding.jpg",
	"./img/playstation/game-section/demon_souls.jpg",
	"./img/playstation/game-section/final_fantasy_7.jpg",
	"./img/playstation/game-section/ghost_of_tsushima.jpg",
	"./img/playstation/game-section/god_of_war.jpg",
	"./img/playstation/game-section/horizon.jpg",
	"./img/playstation/game-section/infamous.jpg",
	"./img/playstation/game-section/killzone.jpg",
	"./img/playstation/game-section/little_big_planet.jpg",
	"./img/playstation/game-section/morales.jpg",
	"./img/playstation/game-section/persona.jpg",
	"./img/playstation/game-section/ratchet_and_clank_rift_apart.jpg",
	"./img/playstation/game-section/ratchet_and_clank.jpg",
	"./img/playstation/game-section/shadow_of_the_colossus.jpg",
	"./img/playstation/game-section/spider_man.jpg",
	"./img/playstation/game-section/the_last_guardian.jpg",
	"./img/playstation/game-section/the_last_of_us_part_2.jpg",
	"./img/playstation/game-section/the_last_of_us.jpg",
	"./img/playstation/game-section/uncharted.jpg",
	"./img/playstation/game-section/until_dawn.jpg",
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
		divSwitch.classList.add("hide");
		playstationSection.classList.remove("hide");
		// playstationSection.style.zIndex = "0";
	}, 2300);
});
