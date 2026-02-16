// GET REFERENCES
const visibilitySelect = document.getElementById('visibility-select');
const extraContent = document.getElementById('extra-content');
const enterInput = document.getElementById('enter-input');

// SELECT CHANGE HANDLER
// Trigger any time the select value changes
visibilitySelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'show') {
        // Show hidden checkbox
        extraContent.classList.remove('display-none');
    } else {
        // Hide checkbox
        extraContent.classList.add('display-none');
    }
});

// KEYDOWN HANDLER
// Show alert when Enter key is pressed
enterInput.addEventListener('keydown', (event) => {
    // Check if the specific key is 'Enter'
    if (event.key === 'Enter') {
        alert('The Enter key was pressed!');
    }
});