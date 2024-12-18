// Optional JavaScript can be added for dynamic behaviors if needed.
// Example: Alert on box click or additional interactivity.
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        alert('You clicked on ' + box.querySelector('h3').innerText);
    });
});
document.getElementById('about').addEventListener('click', function() {
    const targetBlock = document.getElementById('department-details');
    targetBlock.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling effect
        block: 'start'  // Scroll the block to the top of the viewport
    });
});
document.getElementById('contact').addEventListener('click', function() {
    const targetBlock = document.getElementById('footer');
    targetBlock.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling effect
        block: 'start'  // Scroll the block to the top of the viewport
    });
});

function redirectLifeSaver(event) {
    let clickedBlock = event.target;

    // Check if the clicked element is a div with the class 'event-block'
    if (!clickedBlock.classList.contains('icons')) {
        // If not, keep moving up the parent elements until we find the div with the class 'event-block'
        clickedBlock = clickedBlock.closest('.icons');
    }

    // Now clickedBlock should be the div with class 'event-block'
    const eventId = clickedBlock.id;  // Get the ID of the event block
    console.log(eventId);  // Logs the ID of the clicked event block

    window.location.href = `/lifeSaverEvent?eventId=${eventId}`;
}
