// === TIMELINES ===
const timeline1 = gsap.timeline();
const timeline2 = gsap.timeline();

// === ANIMACIÓN DE ELEMENTOS INICIALES ===
let animations = [
  ".navbar",
  ".logo",
  "#sobremi",
  "#programacionnav",
  "#disenonav"
];

animations.forEach(animation => {
  timeline1.from(animation, {
  x: -1000,
  duration: 1,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out"
});

});

timeline1.from(".profile-float",{
    x:1000,
    duration: 1
})


// === HOVER LOGO ===
$(".logo").hover(
  function () {
    gsap.to(".logo", {
      color: "#f4f4f4",
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    });
  },
  function () {
    gsap.to(".logo", {
      color: "#00bcd4",
      scale: 1,
      duration: 0.4,
      ease: "power2.in"
    });
  }
);


// === HOVER SOBRE IMAGEN DE PERFIL ===
$(".profile-float").hover(
  function () {
    gsap.to(this, {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out"
    });
  },
  function () {
    gsap.to(this, {
      scale: 1,
      duration: 0.3,
      ease: "power2.in"
    });
  }
);

// === ANIMACIÓN Y SCROLL DE LAS CARDS ===
gsap.registerPlugin(ScrollTrigger);
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.id = `card-${index}`;

  // Hover Animation
  $(card).hover(
  function () {
    gsap.to(card, {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,100)",
      duration: 0.3,
      ease: "power2.out"
    });
  },
  function () {
    gsap.to(card, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power2.in"
    });
  }
);


  // Scroll Animation (Repeatable)
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play reverse play reverse", // Reproduce al entrar y salir
      markers: false, // Pon true para debug
    },
    opacity: 0,
    x: -150,
    duration: 1,
    ease: "power2.out"
  });
});

// === BOTÓN DE MENÚ RESPONSIVO ===
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".nav-links").toggleClass("visible"); // Mostrar/ocultar menú

    // Aquí agregamos o quitamos la clase active para animar el botón
    $(this).toggleClass("active");
  });

  // Opcional: cerrar menú después de hacer clic en un enlace (y quitar animación del botón)
  $(".nav-links a").click(function () {
    if ($(window).width() <= 580) {
      $(".nav-links").removeClass("visible");
      $(".menu-toggle").removeClass("active");
    }
  });
});



const headings = document.querySelectorAll("h2");

headings.forEach((heading, index) => {
  heading.id = `h2-${index}`;

  // Scroll Animation (Repeatable)
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top 90%",
      toggleActions: "play reverse play reverse", // Entra y sale
      markers: false // Cambia a true si querés ver los puntos de activación
    },
    opacity: 0,
    x: -150,
    duration: 1,
    ease: "power2.out"
  });
});
