const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const update = () => {

                count += target / 120;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

}, { threshold: 0.6 });

counters.forEach(counter => {

    observer.observe(counter);

});


const hero = document.querySelector(".hero");

const glow1 = document.querySelector(".glow1");
const glow2 = document.querySelector(".glow2");

if(hero){

hero.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    glow1.style.transform = `translate(${x}px, ${y}px)`;
    glow2.style.transform = `translate(${-x}px, ${-y}px)`;

});

}

const heroContent = document.querySelector(".hero-content");

if(hero && heroContent){

hero.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroContent.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});

}
if(hero){
    hero.addEventListener("mouseleave", () => {

        heroContent.style.transform = "rotateY(0deg) rotateX(0deg)";

    });
}

const magneticButtons = document.querySelectorAll(".magnetic-btn");

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", function (e) {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    button.addEventListener("mouseleave", function () {

        button.style.transform = "translate(0px, 0px)";

    });

});

const light = document.querySelector(".cursor-light");
// const hero = document.querySelector(".hero");

if(hero && light){

    hero.addEventListener("mousemove",(e)=>{

    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";

    });

}


// load header

fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });