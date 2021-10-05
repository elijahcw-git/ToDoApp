let textField = document.getElementById('todoitem');
let submitBtn = document.querySelector('#submit');
const toDo = document.getElementById('toDos');

submitBtn.addEventListener('click', submitToDo);

function submitToDo () {

 
    if ( textField.value.length > 0 ) {   

    const para = document.createElement("li")
    const node = document.createTextNode(`${textField.value} - ` );
    const delBtn = document.createElement('button');
    const completeBtn = document.createElement('button');

    delBtn.appendChild(document.createTextNode('Delete'));
    completeBtn.appendChild(document.createTextNode('Done!'));

     completeBtn.addEventListener('click', function () {

         para.style.textDecoration = "line-through";

     });
    

    delBtn.addEventListener('click', function (){
        para.remove(node);
    });

    para.appendChild(node);
    para.appendChild(completeBtn);
    para.appendChild(delBtn);
    toDo.appendChild(para);
    

    textField.value = "";
    

    } else {

        alert('Empty!')
        
    }

    
  
}

