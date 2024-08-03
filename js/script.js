const contactItems = document.querySelectorAll('.contacts-li');
const chatSection = document.getElementById('chat');
const contactsSection = document.getElementById('contacts')
const back = document.getElementById('back')
const media = window.matchMedia('(max-width: 768px)')

    function setupListeners() {
        if (media.matches) {
            chatSection.style.visibility = 'hidden';
            // Solo agregar los listeners si estamos en pantallas pequeñas
            contactItems.forEach(item => {
                item.addEventListener('click', handleContactClick);
            });
            back.addEventListener('click', handleBackClick);
        } else {
            // Eliminar los listeners si estamos en pantallas grandes
            contactItems.forEach(item => {
                item.removeEventListener('click', handleContactClick);
            });
            back.removeEventListener('click', handleBackClick);

            // Asegurarse de que los elementos se muestren correctamente en pantallas grandes
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


/*document.addEventListener("DOMContentLoaded", function() {
    const contactItems = document.querySelectorAll('.contacts-li');
    const chatSection = document.getElementById('chat');
    const contactsSection = document.getElementById('contacts')
    const back = document.getElementById('back')
    const media = window.matchMedia('(max-width: 768px)')

    function screenTest(e){
        if(e.matches){
            contactItems.forEach(item => {
                item.addEventListener('click', function() {
                    chatSection.style.visibility = 'visible';
                    contactsSection.style.display = 'none';
                });
            });


            back.addEventListener('click', function(){
                chatSection.style.visibility = 'hidden';
                contactsSection.style.display = 'block';
            }

            )

        }
        else{
            chatSection.style.visibility = 'visible'
            contactsSection.style.display = 'block';
        }

    }

    media.addListener(screenTest);

});
*/


