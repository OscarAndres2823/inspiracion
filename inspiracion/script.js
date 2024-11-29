const quotes = [
    '"La mejor manera de predecir el futuro es crearlo." – Peter Drucker',
    '"El único modo de hacer un gran trabajo es amar lo que haces." – Steve Jobs',
    '"No cuentes los días, haz que los días cuenten." – Muhammad Ali',
    '"La vida es lo que pasa mientras estás ocupado haciendo otros planes." – John Lennon',
    '"La educación es el arma más poderosa que puedes usar para cambiar el mundo." – Nelson Mandela',
    '"El fracaso es una oportunidad para comenzar de nuevo con más inteligencia." – Henry Ford',
    '"Todo lo que siempre has querido está al otro lado del miedo." – George Addair',
    '"Haz siempre lo mejor que puedas. Lo que plantes hoy, cosecharás mañana." – Og Mandino',
    '"Si puedes soñarlo, puedes lograrlo." – Zig Ziglar',
    '"La perfección no es alcanzable, pero si perseguimos la perfección podemos alcanzar la excelencia." – Vince Lombardi',
    '"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito." – Albert Schweitzer',
    '"Cree en ti mismo y en todo lo que eres." – Christian D. Larson',
    '"La felicidad no es algo ya hecho. Viene de tus propias acciones." – Dalai Lama'
];

const quoteText = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote-button");
const autoSwitch = document.getElementById("auto-switch");
const themeToggle = document.getElementById("theme-toggle");
let interval;

// Mostrar una cita aleatoria
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
    quoteText.classList.remove("fade-in");
    void quoteText.offsetWidth; // Reinicia la animación
    quoteText.classList.add("fade-in");
}

// Cambiar tema (modo claro/oscuro)
function toggleTheme() {
    document.body.dataset.theme =
        document.body.dataset.theme === "dark" ? "light" : "dark";
}

// Cambio automático de citas
function toggleAutoSwitch() {
    if (autoSwitch.checked) {
        interval = setInterval(showRandomQuote, 5000);
    } else {
        clearInterval(interval);
    }
}

// Eventos
newQuoteButton.addEventListener("click", showRandomQuote);
autoSwitch.addEventListener("change", toggleAutoSwitch);
themeToggle.addEventListener("click", toggleTheme);
