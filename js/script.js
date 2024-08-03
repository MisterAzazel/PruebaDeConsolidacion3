document.addEventListener("DOMContentLoaded", function() {
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



