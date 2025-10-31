const container = document.querySelector('.container');
const sizeBtn = document.querySelector('.size-btn');

let numberOfRows = 16;


createGrid();

sizeBtn.addEventListener('click', () => {
    numberOfRows = prompt('How many rows do you want the grd to have? (1-100)');
    while (numberOfRows < 1 || numberOfRows > 100) {
        numberOfRows = prompt('Please give a number between 1 and 100');
    }
    deleteGrid();
    createGrid();
});

container.addEventListener("mouseover", (event) => {
    if (!(event.target.className === 'container')) {
        event.target.style.backgroundColor = randomRGB();
    }
    

});

function createGrid() {
    for (let i = 0; i < numberOfRows*numberOfRows; i++) {
        const gridbox = document.createElement('div');
        gridbox.classList.add('gridbox');
        gridbox.style.width = (960/numberOfRows).toString() + "px";
        gridbox.style.height = (960/numberOfRows).toString() + "px";


        container.appendChild(gridbox);
    }
}

function deleteGrid() {
    let child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
}


function randColorNum() {
    return Math.floor(Math.random() * 256);
}
function randomRGB(){
    return `rgb(${randColorNum()}, ${randColorNum()}, ${randColorNum()})`;
}
