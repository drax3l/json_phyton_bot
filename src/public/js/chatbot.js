// Obtén los elementos necesarios del DOM
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbotBtn = document.getElementById('close-chatbot');

// Función para abrir el chatbot
chatbotIcon.addEventListener('click', () => {
    chatbotContainer.style.display = 'block'; // Muestra el contenedor del chatbot
});

// Función para cerrar el chatbot
closeChatbotBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'none'; // Oculta el contenedor del chatbot
});
