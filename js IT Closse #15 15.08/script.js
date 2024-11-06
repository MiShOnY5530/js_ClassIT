// Статичный список результатов для автозаполнения
const suggestionsList = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli fruit",
    "Watermelon"
];

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const suggestionsContainer = document.getElementById("suggestions");

    searchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase();
        suggestionsContainer.innerHTML = ""; // Очистка предыдущих предложений

        if (query) {
            const filteredSuggestions = suggestionsList.filter(item => 
                item.toLowerCase().startsWith(query)
            );

            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.textContent = suggestion;

                suggestionItem.addEventListener("click", function() {
                    searchInput.value = this.textContent;
                    suggestionsContainer.innerHTML = ""; // Очистка предложений
                });

                suggestionsContainer.appendChild(suggestionItem);
            });
        }
    });

    // Закрытие списка предложений при клике вне поля ввода
    document.addEventListener("click", function(e) {
        if (e.target !== searchInput) {
            suggestionsContainer.innerHTML = "";
        }
    });
});
