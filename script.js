 const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');
// the let click count variable stores the current number of button clicks. Then it gets the count form local storage if its available, if there is no count in localstorage it initializes to 0 
let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
clickCountDisplay.textContent = clickCount;
        updateUI();

button.addEventListener('click', () => {
    clickCount++;
    localStorage.setItem('clickCount', clickCount);
    clickCountDisplay.textContent = clickCount;
    updateUI();
});

function updateUI() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
    const texts = [
        'Keep going!',
        'Great job!',
        'You are amazing!',
        'Fantastic!',
        'Click click hooray!'
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    header.textContent = texts[randomIndex];
}

