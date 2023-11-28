// menubutton toggle
function myMenuFunction() {
	var menuBtn = document.getElementById("myNavMenu");
	if (menuBtn.className === "nav-menu") {
		menuBtn.className += " responsive";
	} else {
		menuBtn.className = "nav-menu";
	}
}

// darkmode

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
	body.classList.toggle("dark");
});

// type effect

var typingEffect = new Typed(".typedText", {
	strings: ["Developer", "Data Analyst", "Poker Dealer", "Dad"],

	loop: true,
	typeSpeed: 100,
	backSpeed: 80,
	backDelay: 2500,
});

// scroll animation
const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
	origin: "left",
	distance: "80px",
	duration: 2000,
	reset: true,
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
	origin: "right",
	distance: "80px",
	duration: 2000,
	reset: true,
});
srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

// active section

const sections = document.querySelectorAll(".section[id]");
function scrollActive() {
	const scrollY = window.scrollY;
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav-menu ahref*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav-menu ahref*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);
