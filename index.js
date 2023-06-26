'use strict';

function performSearch() {
    const searchInput = document.getElementById('searchInput');

    const searchItem = searchInput.value;

    console.log('Performing search for: ' + searchItem);
}
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', performSearch);
