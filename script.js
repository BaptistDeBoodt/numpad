const numpadButtons = document.querySelectorAll('.num');
const resetButton = document.getElementById('reset');
const dots = document.querySelectorAll('.dot'); // Reference to the dots
let inputSequence = '';
const correctCombination = '5973';

numpadButtons.forEach(button => {
  button.addEventListener('click', () => {
    const num = button.getAttribute('data-num');
    if (inputSequence.length < 4) {
      inputSequence += num;
      updateDots(inputSequence.length);
    }

    // Validate if input reaches 4 digits
    if (inputSequence.length === 4) {
      // Turn all dots red before confirmation
      updateDots(4, '#CCCCFF');

      // Delay confirmation by 1 second
      setTimeout(() => {
        if (inputSequence === correctCombination) {
          // Correct combination: turn dots green
          updateDots(4, 'lightgreen');
        } else {
          // Incorrect combination: turn dots orange
          updateDots(4, 'red');
        }

        inputSequence = ''; // Reset the sequence after confirmation
      }, 200); // 1 second delay
    }
  });
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  inputSequence = ''; // Clear the input sequence
  updateDots(0); // Reset dots to white
});

// Function to update dots
function updateDots(filledCount, color = '#CCCCFF') {
  dots.forEach((dot, index) => {
    if (index < filledCount) {
      dot.style.backgroundColor = color;
    } else {
      dot.style.backgroundColor = 'white';
    }
  });
}
