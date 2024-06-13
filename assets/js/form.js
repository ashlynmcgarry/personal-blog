//storing form data in local storage
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const form = document.querySelector('.whole-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newFormData = {
        username: username.value,
        title: title.value,
        content: content.value,
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
