const contactItems = document.querySelectorAll('.contacts-li');
const chatSection = document.getElementById('chat');
const contactsSection = document.getElementById('contacts')
const back = document.getElementById('back')
const media = window.matchMedia('(max-width: 768px)')

    function setupListeners() {
        if (media.matches) {
            chatSection.style.visibility = 'hidden';
            contactItems.forEach(item => {
                item.addEventListener('click', handleContactClick);
            });
            back.addEventListener('click', handleBackClick);
        } else {
            contactItems.forEach(item => {
                item.removeEventListener('click', handleContactClick);
            });
            back.removeEventListener('click', handleBackClick);

            chatSection.style.visibility = 'visible';
            contactsSection.style.display = 'block';
        }
    }

    function handleContactClick() {
        chatSection.style.visibility = 'visible';
        contactsSection.style.display = 'none';
    }

    function handleBackClick() {
        chatSection.style.visibility = 'hidden';
        contactsSection.style.display = 'block';
    }

    // Inicializar los listeners al cargar la página
    setupListeners();

    // Actualizar los listeners cuando cambie el tamaño de la pantalla
    media.addListener(setupListeners);

