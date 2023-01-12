function createDivs(lineSize) {
    const element = document.getElementById('container');
    let gridDiv;

    element.innerHTML = '';

    for (let i = 0; i < lineSize; i++) {
        for (let i = 0; i < lineSize; i++) {
            gridDiv = document.createElement('div');
            gridDiv.classList.add('grid_div');
            gridDiv.addEventListener('mouseover', (e) => {
                e.target.classList.add('grid_div_mouse_over');
            });
            // gridDiv.addEventListener('mouseleave', (e) => {
            //     e.target.classList.remove('grid_div_mouse_over');
            // })
            element.appendChild(gridDiv);
            
        }
        element.appendChild(document.createElement('br'));
        
    }

}

function createDivsBtn() {
    let userInp = prompt("Number of squares per side?");
    if (userInp >= 100) {
        alert("Too many squares!");
    } else if (userInp < 1) {
        alert("Too few squares!")
    } else {
        createDivs(Number.parseInt(userInp));
    }
}


createDivs(16)