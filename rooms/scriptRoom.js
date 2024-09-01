const rooms = {
    "Jan": { roomNumber: "101", floor: "1", people: ["Jan", "Anna"], type: "two-person" },
    "Anna": { roomNumber: "101", floor: "1", people: ["Jan", "Anna"], type: "two-person" },
    "Kamil": { roomNumber: "202", floor: "2", people: ["Kamil", "Magda", "Paweł"], type: "three-person" },
    "Magda": { roomNumber: "202", floor: "2", people: ["Kamil", "Magda", "Paweł"], type: "three-person" },
    "Paweł": { roomNumber: "202", floor: "2", people: ["Kamil", "Magda", "Paweł"], type: "three-person" },
    "Ola": { roomNumber: "303", floor: "3", people: ["Ola", "Kasia", "Marek", "Piotr"], type: "four-person" },
    "Kasia": { roomNumber: "303", floor: "3", people: ["Ola", "Kasia", "Marek", "Piotr"], type: "four-person" },
    "Marek": { roomNumber: "303", floor: "3", people: ["Ola", "Kasia", "Marek", "Piotr"], type: "four-person" },
    "Piotr": { roomNumber: "303", floor: "3", people: ["Ola", "Kasia", "Marek", "Piotr"], type: "four-person" }
};

function checkRoom() {
    const name = document.getElementById('nameInput').value;
    const roomInfo = rooms[name];

    const resultDiv = document.getElementById('result');
    const roomLayoutDiv = document.getElementById('roomLayout');

    if (roomInfo) {
        resultDiv.innerHTML = `
            <p>Numer pokoju: ${roomInfo.roomNumber}</p>
            <p>Piętro: ${roomInfo.floor}</p>
            <p>Osoby w pokoju: ${roomInfo.people.join(', ')}</p>
        `;

        let layoutHTML = `<div class="room ${roomInfo.type}">`;

        const bedsCount = roomInfo.people.length;
        for (let i = 0; i < bedsCount; i++) {
            layoutHTML += `<div class="bed"></div>`;
        }

        layoutHTML += `<div class="bathroom"></div>`;
        layoutHTML += `</div>`;

        roomLayoutDiv.innerHTML = layoutHTML;
    } else {
        resultDiv.innerHTML = `<p>Nie znaleziono informacji dla podanego imienia.</p>`;
        roomLayoutDiv.innerHTML = '';
    }
}
