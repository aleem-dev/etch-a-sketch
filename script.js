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
            column.classList.add('colorBlack');
            //column.setAttribute('style','background:black');
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


const btn_erase = document.createElement('button');
btn_erase.classList.add('btnErase');
btn_erase.innerHTML = 'Erase';
div_btn.appendChild(btn_erase)

container.appendChild(div_btn);

const div_container = document.createElement('div');
div_container.setAttribute('style','width:480px; height:480px');
div_container.classList.add('container');
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
    var btn_Erase = document.querySelector('.btnErase');
    btn_Erase.removeEventListener('click',()=>{});
    //document.querySelector('btnErase').removeEventListener('click',()=>{});
    var columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function colorBlk(){
        // console.log('this: '+ this);
        // console.log('column: '+column);
        // console.log('target: '+EventTarget);
        if(!click){
            this.classList.add('colorBlack');
        }
    }))
});


btn_erase.addEventListener('click',function eraseColor(){
    var columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function colorwht (){
        if(!click){
            column.classList.remove('colorBlack');
        }
    }));
})



// btn_random.addEventListener('click',function randomColor(){
//     var columns = document.querySelectorAll('.column');
//     columns.forEach(column => column.addEventListener('mouseover', function color (){
//         if(!click){
//             // column.classList.add('colorWhite');
//             column.setAttribute('style','background:pink');
//         }
//     }));
// })

div_container.addEventListener('click', () => {click=!click;});