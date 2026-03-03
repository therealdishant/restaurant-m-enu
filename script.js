function scrollToMenu(){
    document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}

// Dark mode
document.getElementById("darkToggle").addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

// Active nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{
    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 150;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});

// Filter
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        const filter = btn.dataset.filter;

        cards.forEach(card=>{
            card.style.display = 
                filter === "all" || card.classList.contains(filter)
                ? "block" : "none";
        });
    });
});

// Fade in on scroll
const faders = document.querySelectorAll(".fade");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add("show");
    });
}, appearOptions);

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
});