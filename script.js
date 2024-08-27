// Function to handle button click
function handleButtonClick(event) {
    const buttons = event.target.parentElement.querySelectorAll('button');

    // Remove the 'selected' class from all buttons in the same section
    buttons.forEach(button => button.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    event.target.classList.add('selected');
}

// Attach event listeners to all buttons
document.querySelectorAll('.section .buttons button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});