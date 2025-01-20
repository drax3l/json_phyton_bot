// Obtén los elementos necesarios del DOM
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbotBtn = document.getElementById('close-chatbot');
const iframeChatbot = document.getElementById('iframe-chatbot');
const dfMessenger = document.getElementById('df-messenger');

// Función para abrir el chatbot (mostrar solo uno)
let isChatbotOpen = false;

chatbotIcon.addEventListener('click', () => {
    // Solo muestra el chatbot si no está abierto
    if (!isChatbotOpen) {
        // Alterna entre mostrar el iframe y el df-messenger
        if (iframeChatbot.style.display === 'none') {
            iframeChatbot.style.display = 'block';
            dfMessenger.style.display = 'none';
        } else {
            iframeChatbot.style.display = 'none';
            dfMessenger.style.display = 'block';
        }

        // Añade la clase 'show' para animar la aparición
        chatbotContainer.classList.remove('hide');
        chatbotContainer.classList.add('show');

        // Muestra el contenedor del chatbot
        chatbotContainer.style.display = 'block';
        isChatbotOpen = true;  // Marca el chatbot como abierto
    }
});

// Función para cerrar el chatbot con animación
closeChatbotBtn.addEventListener('click', () => {
    // Añade la clase 'hide' para animar el cierre
    chatbotContainer.classList.remove('show');
    chatbotContainer.classList.add('hide');

    // Después de la animación, ocultamos el contenedor completamente
    setTimeout(() => {
        chatbotContainer.style.display = 'none';
        iframeChatbot.style.display = 'none'; // Asegura que el iframe también se oculte
        dfMessenger.style.display = 'none'; // Asegura que el df-messenger también se oculte
    }, 300); // Tiempo que dura la animación antes de ocultar el contenedor

    isChatbotOpen = false;  // Marca el chatbot como cerrado
});
