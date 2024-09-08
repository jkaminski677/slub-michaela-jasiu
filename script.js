// document.addEventListener("DOMContentLoaded", function() {
//     const contentHeight = document.body.scrollHeight;
//     const windowHeight = window.innerHeight;
//     const windowWidth = window.innerWidth;
//     const interval = windowHeight; // Co ile pikseli mają się pojawiać prostokąty

//     for (let i = 0; i < contentHeight; i += interval) {
//         const rect = document.createElement('div');
//         rect.classList.add('rectangle');

//         // Losowe skalowanie szerokości i wysokości prostokątów
//         const widthScale = 0.2 + Math.random() * (0.95 - 0.2);
//         const heightScale = 0.2 + Math.random() * (0.95 - 0.2);

//         const width = windowWidth * widthScale;
//         const height = windowHeight * heightScale;

//         rect.style.width = `${width}px`;
//         rect.style.height = `${height}px`;

//         if (i / interval % 3 === 0) {
//             rect.classList.add('left');
//         } else if (i / interval % 3 === 1) {
//             rect.classList.add('right');
//         } else {
//             rect.classList.add('center');
//         }

//         rect.style.top = `${i}px`;
//         document.body.appendChild(rect);
//     }
// });




// document.addEventListener("DOMContentLoaded", function() {
//     const contentHeight = document.body.scrollHeight;
//     const windowHeight = window.innerHeight;
//     const windowWidth = window.innerWidth;
//     const interval = windowHeight; // Co ile pikseli mają się pojawiać prostokąty

//     for (let i = 0; i < contentHeight; i += interval) {
//         // Tworzenie dwóch prostokątów dla każdego interwału
//         for (let j = 0; j < 2; j++) {
//             const rect = document.createElement('div');
//             rect.classList.add('rectangle');

//             // Losowe skalowanie szerokości i wysokości prostokątów
//             const widthScale = 0.2 + Math.random() * (0.45 - 0.2);  // Maks. 45% szerokości okna
//             const heightScale = 0.2 + Math.random() * (0.45 - 0.2); // Maks. 45% wysokości okna

//             const width = windowWidth * widthScale;
//             const height = windowHeight * heightScale;

//             rect.style.width = `${width}px`;
//             rect.style.height = `${height}px`;

//             if (j === 0) {
//                 rect.classList.add('left');
//             } else if (j === 1) {
//                 rect.classList.add('right');
//             } 

//             // Pozycjonowanie pionowe, tak aby prostokąty się nie nakładały
//             const topOffset = j === 0 ? i : i + height;
//             rect.style.top = `${topOffset}px`;

//             // Dodawanie prostokąta do dokumentu
//             document.body.appendChild(rect);
//         }
//     }
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const gap = 300; // Przerwa między prostokątami

//     // Funkcja do tworzenia prostokątów
//     function createRectangle(className, left, top, width, height) {
//         const rect = document.createElement('div');
//         rect.classList.add('rectangle', className);
//         rect.style.width = `${width}px`;
//         rect.style.height = `${height}px`;
//         rect.style.left = `${left}px`;
//         rect.style.top = `${top}px`;
//         document.body.appendChild(rect);
//     }

//     // Pierwszy prostokąt (lewy)
//     const firstRectWidth = 0.80 * windowWidth; // 80% szerokości okna
//     const firstRectHeight = 0.97 * windowHeight; // 97% wysokości okna
//     createRectangle('left', 0, 0, firstRectWidth, firstRectHeight);

//     // Drugi prostokąt (prawy)
//     const secondRectWidth = 0.80 * windowWidth; // 80% szerokości okna
//     const secondRectHeight = 0.97 * windowHeight; // 97% wysokości okna
//     const secondRectLeft = firstRectWidth + gap; // Pozycja pozioma prawego prostokąta, uwzględniając przerwę
//     const secondRectOffsetTop = 0; // Można dostosować, jeśli chcesz, aby drugi prostokąt zaczynał się od innej wysokości

//     // Sprawdzanie, czy prostokąt mieści się w widoku
//     if (secondRectLeft + secondRectWidth > windowWidth) {
//         console.warn('Drugi prostokąt nie mieści się w widoku!');
//     } else {
//         createRectangle('right', secondRectLeft, secondRectOffsetTop, secondRectWidth, secondRectHeight);
//     }
// });







document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('Info-Section').scrollIntoView({
        behavior: 'smooth' // Używa animacji płynnego przewijania
    });
});


// Wyłączanie guzika na wielkich stronach

// function checkScreenHeight() {
//     const button = document.querySelector('.button-cl');
//     const message = document.querySelector('.message');

//     if (window.innerHeight > 800) {
//         button.style.display = 'none';
//         message.style.display = 'block';
//     } else {
//         button.style.display = 'block';
//         message.style.display = 'none';
//     }
// }

// // Wywołanie funkcji na początku i przy każdym zmianie rozmiaru okna
// window.addEventListener('resize', checkScreenHeight);
// checkScreenHeight();  // Wywołanie na początku, aby ustawić odpowiedni stan


/* -------------------------------------------------------------- */
// FAQ
/* -------------------------------------------------------------- */

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('.toggle-icon');

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.maxHeight = null);
            document.querySelectorAll('.toggle-icon').forEach(ic => ic.textContent = '+');
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = '-';
        }
    });
});

/* -------------------------------------------------------------- */


/* -------------------------------------------------------------- */
// Włączenie przycisku w dniu slubu
/* -------------------------------------------------------------- */

// Funkcja, która sprawdzi aktualną datę i porówna ją z docelową
function checkDateAndTime() {
    let currentTime = new Date();
    let targetTime = new Date('2024-09-11T13:00:00');  // Ustawienie docelowego czasu

    // Jeśli obecny czas przekracza docelowy, ustaw opacity na 1
    if (currentTime >= targetTime) {
        document.getElementById('hidden-element').style.opacity = '1';
    }
}

// Sprawdzanie co sekundę
setInterval(checkDateAndTime, 1000);
/* -------------------------------------------------------------- */
