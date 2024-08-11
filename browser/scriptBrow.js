document.getElementById('search-input').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let guests = document.querySelectorAll('.guest');
    let tables = document.querySelectorAll('.table');
    let found = false;

    tables.forEach(function(table) {
        table.classList.remove('inactive');
    });

    guests.forEach(function(guest) {
        guest.classList.remove('highlight');
        guest.style.display = 'none';  // Ukrycie wszystkich imion

        if (guest.textContent.toLowerCase() === searchValue && searchValue !== "") {
            found = true;
            guest.style.display = 'block';  // Wyświetlenie tylko znalezionego imienia
            guest.classList.add('highlight');

            tables.forEach(function(table) {
                if (table.contains(guest)) {
                    table.classList.remove('inactive');
                } else {
                    table.classList.add('inactive');
                }
            });
        }
    });

    if (!found || searchValue === "") {
        tables.forEach(function(table) {
            table.classList.remove('inactive');
        });
    }
});
