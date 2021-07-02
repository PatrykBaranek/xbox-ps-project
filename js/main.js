const xbxBtn = document.querySelector(".xbx-btn");
const psBtn = document.querySelector(".ps-btn");

const navBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
const allNavItems = document.querySelectorAll(".nav__item");

const divSwitch = document.querySelector(".switch");
const playstationSection = document.querySelector(".playstation-section");

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

// Showing website

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
	setTimeout(() => {
		divSwitch.classList.toggle("hide");
		playstationSection.classList.toggle("hide");
	}, 2500);
});
