const defaultButton = document.getElementById('postButton');
const photoButton = document.getElementById('photoButton');
const albumsButton = document.getElementById('albumsButton');
const typeElement = document.getElementById('postType');
const itemList = document.getElementById('list');

function changeType(newType) {
    typeElement.textContent = newType;
}

function displayList(data) {
    itemList.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title;
        itemList.appendChild(li);
    });
}
function toggleButton(button) {
    defaultButton.style.backgroundColor = 'white';
    photoButton.style.backgroundColor = 'white';
    albumsButton.style.backgroundColor = 'white';
    button.style.backgroundColor="red";
}
// Mặc định hiển thị posts
defaultButton.style.backgroundColor="red";
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        changeType('Posts');
        displayList(data); 
    });

defaultButton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            changeType('Posts');
            displayList(data); 
            toggleButton(defaultButton);
        });
});

photoButton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {
            changeType('Photos');
            displayList(data); 
            toggleButton(photoButton);
        });
});

albumsButton.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            changeType('Albums'); 
            displayList(data); 
            toggleButton(albumsButton);
        });
});
