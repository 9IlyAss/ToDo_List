
let list=document.querySelector('.list');
let table=document.querySelector('table')
let submit=document.querySelector('.submit');


function addtask()
{
    let task=document.querySelector('.task').value;
    let tr=document.createElement('tr');
    let th=document.createElement('th');
    let dele=document.createElement('button');
    let acco=document.createElement('button');

    
    dele.textContent="Delete";
    dele.id=task;

    acco.textContent="Complete";
    acco.className=task;

    
    th.textContent=task;
    th.appendChild(dele);
    th.appendChild(acco);

    tr.appendChild(th);
    table.appendChild(tr);
    
    dele.addEventListener('click',function(){
        table.removeChild(tr);
    });
    acco.addEventListener('click',function(){
        th.style.textDecoration = 'line-through';
    });
    task="";//it ain't working
    
}




submit.addEventListener('click',addtask);