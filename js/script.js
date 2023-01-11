/* =========== Show Navbar =========== */
const header = document.querySelector('.header');
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)');

Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navbar.classList.remove('show');
  });
});

const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

/* =========== Calculator =========== */
const form = document.querySelector('.calorie-calculator');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(form.querySelector('input[name="weight"]').value);
    const height = parseFloat(form.querySelector('input[name="height"]').value);
    const age = parseFloat(form.querySelector('input[name="age"]').value);
    const gender = form.querySelector('select[name="gender"]').value;
    const activity = parseFloat(form.querySelector('select[name="activity-level"]').value);

    let calorieIntake = 0;

    if (gender === 'male') {
        calorieIntake = (66 + (6.2 * weight) + (12.7 * height) - (6.76 * age)) * activity;
    } else {
        calorieIntake = (655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)) * activity;
    }

    result.innerHTML = `Your daily calorie intake is ${calorieIntake} calories.`;
});
/* =========== Scroll Top =========== */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});





