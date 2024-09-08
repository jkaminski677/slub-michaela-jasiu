document.getElementById('search-input').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let guests = document.querySelectorAll('.guest');
    let tables = document.querySelectorAll('.table');
    let found = false;

    // Jeśli pole wyszukiwania jest puste, ukryj wszystkich gości
    if (searchValue === "") {
        guests.forEach(function(guest) {
            guest.style.display = 'none';  // Ukryj wszystkich gości
        });
        tables.forEach(function(table) {
            table.classList.remove('inactive');  // Pokaż wszystkie stoły
        });
        return;  // Zakończ działanie funkcji, jeśli nic nie wpisano
    }

    // Resetowanie widoczności stołów
    tables.forEach(function(table) {
        table.classList.remove('inactive');
    });

    guests.forEach(function(guest) {
        guest.classList.remove('highlight');
        guest.style.display = 'none';  // Ukrycie wszystkich imion

        // Szukanie na podstawie częściowego dopasowania
        if (guest.textContent.toLowerCase().includes(searchValue)) {
            found = true;
            guest.style.display = 'block';  // Wyświetlenie tylko znalezionych imion
            guest.classList.add('highlight');

            // Aktywowanie stołu z gościem
            tables.forEach(function(table) {
                if (table.contains(guest)) {
                    table.classList.remove('inactive');
                } else {
                    table.classList.add('inactive');
                }
            });
        }
    });

    // Jeśli nic nie znaleziono, ukryj wszystkich gości i stoły
    if (!found) {
        guests.forEach(function(guest) {
            guest.style.display = 'none';  // Ukryj wszystkich gości, jeśli nie ma wyniku
        });
        tables.forEach(function(table) {
            table.classList.remove('inactive');  // Pokaż wszystkie stoły
        });
    }
});
