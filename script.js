document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card');
    var modal = document.getElementById('messageModal');
    var messageBox = document.querySelector('.message');
    var loader = document.querySelector('.loader');

    cards.forEach(function(card, index) {
        card.addEventListener('click', function() {
            var day = card.getAttribute('data-day');
            showModal(day);
        });
    });

    function showModal(day) {
        loader.style.display = 'block';
        messageBox.style.display = 'none';
        modal.style.display = 'flex';

        setTimeout(function() {
            loader.style.display = 'none';
            messageBox.innerHTML = `Happy ${day} to My Love, from Shantanu! <br> Day ${day.startsWith('Valentine') ? '8' : day.split(' ')[0]}`;
            messageBox.style.display = 'block';
        }, 2000); // Show message after the loader
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
