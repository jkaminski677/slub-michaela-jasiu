
// Room

const roomData = {
    "Jan": { roomNumber: "101", floor: 1, roommates: ["Adam"], layout: { beds: 2, bathroom: true }},
    "Anna": { roomNumber: "102", floor: 1, roommates: ["Ewa", "Kasia"], layout: { beds: 3, bathroom: true }},
    "Paweł": { roomNumber: "201", floor: 2, roommates: ["Łukasz", "Michał", "Tomek"], layout: { beds: 4, bathroom: true }},
    "Ola": { roomNumber: "202", floor: 2, roommates: ["Zosia"], layout: { beds: 2, bathroom: false }},
    // Dodaj więcej osób i pokoi
};

function checkRoom() {
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');
    const roomLayoutDiv = document.getElementById('roomLayout');
    
    resultDiv.innerHTML = '';
    roomLayoutDiv.innerHTML = '';

    if (roomData[name]) {
        const room = roomData[name];
        resultDiv.innerHTML = `
            <p>Numer pokoju: ${room.roomNumber}</p>
            <p>Piętro: ${room.floor}</p>
            <p>Osoby w pokoju: ${room.roommates.join(', ')}</p>
        `;
        drawRoomLayout(room.layout);
    } else {
        resultDiv.innerHTML = '<p>Nie znaleziono informacji o tym imieniu.</p>';
    }
}

function drawRoomLayout(layout) {
    const roomLayoutDiv = document.getElementById('roomLayout');
    const roomDiv = document.createElement('div');
    roomDiv.className = 'room';

    for (let i = 0; i < layout.beds; i++) {
        const bedDiv = document.createElement('div');
        bedDiv.className = 'bed';
        bedDiv.textContent = `Łóżko ${i + 1}`;
        roomDiv.appendChild(bedDiv);
    }

    if (layout.bathroom) {
        const bathroomDiv = document.createElement('div');
        bathroomDiv.className = 'bathroom';
        bathroomDiv.textContent = 'Łazienka';
        roomDiv.appendChild(bathroomDiv);
    }

    roomLayoutDiv.appendChild(roomDiv);
}
