const squareContainer = document.querySelector('#main_body');
const gridPrompt = document.querySelector('#gridPrompt');
let square,squareCol,length;

function addgrid(n){
    length = 960/n;
    console.log(length)
    for (let  i=0;i<n;i++){
        squareCol = document.createElement('div');
        squareCol.classList.add('squareCol');

        for (let j=0;j<n;j++){
            square = document.createElement('div');
            square.classList.add('etchgrid');
            square.style.cssText = `height: ${length}px;width: ${length}px;`;
            squareCol.appendChild(square);

            square.addEventListener('mouseover',(event)=>{
                if (event.buttons ==1){
                    event.target.style.background='black';
                }
            })
            square.addEventListener('click',(event)=>{
                event.target.style.background='black';
            })
        }

        squareContainer.appendChild(squareCol);
    }
}
addgrid(20);



gridPrompt.addEventListener('click',()=>{
    let n = parseInt(prompt('From 1-100, enter row size.',16));

    if (n==NaN || !n){
        n=16; //default value
    }
    else if (n<1){
        n =1;
    }
    else if (n>100){
        n = 100;
    }

    console.log(parseInt(n));

    //clear the grid
    squareContainer.innerHTML = '';
    addgrid(n);

})


