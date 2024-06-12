//storing form data in local storage
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');

const form = document.querySelector('.whole-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newFormData = {
        username: username,
        title: title,
        content: content
    };

    if (!username || !title || !content) {
        alert('Please complete the form.');
        preventDefault();
    }

    let existingData = JSON.parse(localStorage.getItem('formData')) || [];
    existingData.push(newFormData);

    localStorage.setItem('formData', JSON.stringify(existingData));

    window.location.href = './blog.html';
});
