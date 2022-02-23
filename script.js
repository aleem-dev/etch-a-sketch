function createGrid(gridSize){
    div_container.innerHTML='';
    let pixelSize = (480/gridSize)+'px';
    for (let index = 0; index < gridSize; index++) {
        const div_GridRow = document.createElement('div');
        div_GridRow.classList.add('row');
            for (let index = 0; index < gridSize; index++) {
            const div_GridColumn = document.createElement('div');
            // div_GridColumn.style.width = pixelSize;
            // div_GridColumn.style.height = pixelSize;
            let buff = 'width:'+pixelSize+';height:'+pixelSize+';';
            div_GridColumn.setAttribute('style',buff);
            div_GridColumn.classList.add('column');
            div_GridRow.appendChild(div_GridColumn);        
            }
        div_container.appendChild(div_GridRow)
    }
}

function coloring(){
    var columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function l (){
        if(!click){
            //column.classList.add('colorBlack');
            //column.setAttribute('style','background:black');
            //column.setAttribute('style','background-color:yellow');
            column.style.background = 'black' ;
            console.log(column.getAttribute('style'));
        }
    }));
}

let click = true;
let gridSize = 8;

const container = document.querySelector('.container');

const div_btn = document.createElement('div');
div_btn.classList.add('btnClass');

const btn_clear = document.createElement('button');
btn_clear.classList.add('btnClear');
btn_clear.innerText = 'Clear';
div_btn.appendChild(btn_clear);

const btn_black = document.createElement('button');
btn_black.classList.add('btnBlack');
btn_black.innerText = 'Black';
div_btn.appendChild(btn_black);

const btn_gray = document.createElement('button');
btn_gray.classList.add('btnGray');
btn_gray.innerText = 'Gray';
div_btn.appendChild(btn_gray);

const btn_random = document.createElement('button');
btn_random.classList.add('btnRandom');
btn_random.innerText = 'Random';
div_btn.appendChild(btn_random);


const btn_erase = document.createElement('button');
btn_erase.classList.add('btnErase');
btn_erase.innerHTML = 'Erase';
div_btn.appendChild(btn_erase)

container.appendChild(div_btn);

const div_container = document.createElement('div');
div_container.setAttribute('style','width:480px; height:480px');
div_container.classList.add('grid');
container.appendChild(div_container);
createGrid(gridSize);
coloring();

btn_clear.addEventListener('click',function clearColor(){
    let columns = document.querySelectorAll('.column');
    columns.forEach(column => column.setAttribute('style','background:white'));
    // columns.forEach(column => column.classList.remove('colorBlack'));
    gridSize = prompt('enter grid size beteen 1 to 100?');
    if(gridSize>=1 && gridSize<=100){
        createGrid(gridSize);
        coloring();
    }
    else{
        alert('please enter between 1 to 100');
    }
});

btn_black.addEventListener('click',function Blk(){
    // var btn_Erase = document.querySelector('.btnErase');
    // btn_Erase.removeEventListener('click',()=>{});
    //document.querySelector('btnErase').removeEventListener('click',()=>{});
    // let op = 0.1;
    var columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function colorBlk(){
        if(!click){
            column.style.background = 'black';
            // column.style.opacity = op;
            // (op<=0.9)?op+=0.1:op=0.1;
        }
    }))
});

btn_gray.addEventListener('click', function gry(){
    let op = 0.1;
    var columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function colorGry(){
        if(!click){
            column.style.background = 'black';
            column.style.opacity = op;
            (op<=0.9)?op+=0.1:op=0.1;
        }
    }))
});


btn_erase.addEventListener('click',function eraseColor(){
    var columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function colorwht (){
        if(!click){
            //column.classList.remove('colorBlack');
            column.style.removeProperty('background');
        }
    }));
})



btn_random.addEventListener('click',function randomColor(){
    var columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function color (){
        if(!click){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            column.style.background = '#'+randomColor;
        }
    }));
})

div_container.addEventListener('click', () => {click=!click;});