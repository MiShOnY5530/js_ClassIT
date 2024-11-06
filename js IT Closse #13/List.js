document.getElementById('addItemBtn').addEventListener('click', function () {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const itemList = document.getElementById('itemList');

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${itemText} <button class="btn btn-danger btn-sm delete-btn">Видалити</button>`;

        itemList.appendChild(listItem);

        itemInput.value = '';

        listItem.querySelector('.delete-btn').addEventListener('click', function () {
            listItem.remove();
        });
    }
});
