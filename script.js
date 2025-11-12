// Get the text editor and word count display
const editor = document.getElementById('editor');
const wordCountDisplay = document.getElementById('wordCount');

// Function to count words
function countWords(text) {
    // Remove extra spaces and split into words
    const words = text.trim().split(/\s+/);
    // If text is empty, return 0
    return text.trim() === '' ? 0 : words.length;
}

// Update word count whenever user types
editor.addEventListener('input', function() {
    const text = editor.value;
    const wordCount = countWords(text);
    wordCountDisplay.textContent = wordCount;
});

// Auto-save to browser storage every 2 seconds
setInterval(function() {
    localStorage.setItem('savedText', editor.value);
}, 2000);

// Load saved text when page opens
window.addEventListener('load', function() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        editor.value = savedText;
        wordCountDisplay.textContent = countWords(savedText);
    }
});
