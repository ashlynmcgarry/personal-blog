//retrieving form data from local storage and displaying it on page
const displayContainer = document.getElementById('main-content');

function addItemsToMain() {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));

    if (storedFormData) {
        storedFormData.forEach(data => {

            const formDataDiv = document.createElement('div');

            formDataDiv.innerHTML =
                `<h3>${data.title}</h3>
            <p>Posted by:<br>${data.username}</p>
            <p>Content:<br>${data.content}</p>`;

            displayContainer.appendChild(formDataDiv);
        })
    }
}

addItemsToMain();