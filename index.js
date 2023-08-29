const hamburger = document.querySelector("#hamburger");
const x_mark = document.querySelector("#x-mark");
const container = document.querySelector("#container");
const navLinks = document.querySelector("#nav-links");
const links = document.querySelectorAll("#links");
const program = document.querySelector("#program");
const home = document.querySelector("#home");
const pricing = document.querySelector("#pricing");
const leftImages = document.querySelectorAll(".left-img");
const rightImages = document.querySelectorAll(".right-img");
const trainingClasses = document.querySelector("#training-classes");
const joinBtn = document.querySelector("#join-btn");
const calBtn = document.querySelector("#cal-btn");

// switching hamburger menu to nav links
hamburger.addEventListener("click", () => {
	container.classList.toggle("hidden");
	navLinks.classList.toggle("hidden");
	gsap.from("#nav-links", { duration: 1, x: "-100%", ease: "power4" });
});

// switching nav links to mobile screen
x_mark.addEventListener("click", () => {
	navLinks.classList.toggle("hidden");
	container.classList.toggle("hidden");
});

// navigating to the sections on mobile
links.forEach((link) => {
	link.addEventListener("click", () => {
		navLinks.classList.toggle("hidden");
		container.classList.toggle("hidden");
	});
});

//  BMI calculator
let flag = 0;
calBtn.addEventListener("click", () => {
	const weight = parseInt(document.querySelector("#weight").value);
	const height = parseInt(document.querySelector("#height").value);
	const errorMsg = document.querySelector("#error-msg");
	const BMI = document.querySelector("#bmi");
	const calWeight = document.querySelector("#cal-weight");
	if (
		height <= 0 ||
		weight <= 0 ||
		isNaN(height) ||
		isNaN(weight) ||
		height === "" ||
		weight === ""
	) {
		if (flag == 0) {
			errorMsg.classList.toggle("hidden");
			flag = 1;
			BMI.textContent = "";
			calWeight.textContent = "";
		}
	} else {
		if (flag == 1) {
			errorMsg.classList.toggle("hidden");
			flag = 0;
			const bmi = (weight / ((height * height) / 10000)).toFixed(2);
			if (bmi <= 18.5) {
				BMI.textContent = bmi;
				calWeight.textContent = "Underweight";
			} else if (bmi >= 18.6 && bmi <= 24.9) {
				BMI.textContent = bmi;
				calWeight.textContent = "Normal";
			} else {
				BMI.textContent = bmi;
				calWeight.textContent = "Overweight";
			}
		} else {
			const bmi = (weight / ((height * height) / 10000)).toFixed(2);
			if (bmi <= 18.5) {
				BMI.textContent = bmi;
				calWeight.textContent = "Underweight";
			} else if (bmi >= 18.6 && bmi <= 24.9) {
				BMI.textContent = bmi;
				calWeight.textContent = "Normal";
			} else {
				BMI.textContent = bmi;
				calWeight.textContent = "Overweight";
			}
		}
	}
});

// Animations

gsap.from("#navbar-section", { duration: 1, y: "-100%" });
gsap.from("#hero-section", { duration: 1.5, x: "-100%", ease: "power4" });
gsap.from("#model-img", { duration: 1, x: "40%" });
gsap.from("#classes", { duration: 1, x: "-100%" });
gsap.from("#login", { duration: 1.1, x: "-100%" });

program.addEventListener("click", () => {
	gsap.from("#programs-section", { duration: 2, x: "-100%", ease: "power4" });
});

home.addEventListener("click", () => {
	gsap.from("#hero-section", { duration: 2, x: "-100%", ease: "power4" });
	gsap.from("#model-img", { duration: 1, x: "40%" });
});

pricing.addEventListener("click", () => {
	gsap.from("#price", { duration: 2, x: "200%", ease: "power4" });
});

trainingClasses.addEventListener("click", () => {
	gsap.from(leftImages, { duration: 1.2, x: "-200%", ease: "power4" });
	gsap.from(rightImages, { duration: 1.2, x: "200%", ease: "power4" });
});

joinBtn.addEventListener("click", () => {
	gsap.from(leftImages, { duration: 1.2, x: "-200%", ease: "power4" });
	gsap.from(rightImages, { duration: 1.2, x: "200%", ease: "power4" });
});
