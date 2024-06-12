// light to dark mode switching
const themeSwitcher = document.getElementById('toggle');
const container = document.body;

let mode = 'light';

themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark-mode');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light-mode');
    }
});
