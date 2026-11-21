const inp = document.querySelector('#num');
const tableDiv = document.querySelector('#tableDiv');

function generateTable() {
    tableDiv.textContent = "";
    for (let i = 1; i < 11; i++) {
        tableDiv.innerHTML += `${inp.value} x ${i} = ${inp.value * i} <br>`;
    }
}

inp.addEventListener('keydown', (evt)=> {
    if (evt.key === "Enter") {
        // evt.preventDefault();
        generateTable();
    }
})