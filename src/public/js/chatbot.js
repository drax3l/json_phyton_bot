document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.querySelector('.chatbot-container');
    const iframeChatbot = document.getElementById('iframe-chatbot');
    const chatbotIcon = document.querySelector('.chatbot-icon');
    const closeBtn = document.querySelector('.close-btn');

    let isChatbotOpen = false;

    chatbotIcon.addEventListener('click', () => {
        isChatbotOpen = !isChatbotOpen;
        if (isChatbotOpen) {
            chatbotContainer.classList.add('show');
            chatbotContainer.classList.remove('hide');
        } else {
            chatbotContainer.classList.add('hide');
            chatbotContainer.classList.remove('show');
        }
    });

    closeBtn.addEventListener('click', () => {
        isChatbotOpen = false;
        chatbotContainer.classList.add('hide');
        chatbotContainer.classList.remove('show');
    });

    // Ajustar el tamaño del iframe del chatbot en función del tamaño de la ventana
    function adjustChatbotSize() {
        if (window.innerWidth <= 600) {
            chatbotContainer.style.width = '100%';
            chatbotContainer.style.height = '100%';
            chatbotContainer.style.bottom = '0';
            chatbotContainer.style.right = '0';
            chatbotContainer.style.borderRadius = '0';
        } else {
            chatbotContainer.style.width = '350px';
            chatbotContainer.style.height = '430px';
            chatbotContainer.style.bottom = '20px';
            chatbotContainer.style.right = '20px';
            chatbotContainer.style.borderRadius = '10px';
        }
    }

    // Ajustar el tamaño del chatbot al cargar la página y al cambiar el tamaño de la ventana
    adjustChatbotSize();
    window.addEventListener('resize', adjustChatbotSize);
});