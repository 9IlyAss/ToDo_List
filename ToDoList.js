
let list=document.querySelector('.list');
let table=document.querySelector('table')
let submit=document.querySelector('.submit');


function addtask()
{
    let task=document.querySelector('.task').value;
    if(task==="") return alert("You can't add an empty Task");
    
    let tr=document.createElement('tr');
    let th=document.createElement('th');
    let dele=document.createElement('button')
    let done=document.createElement('button');
    dele.id="delete";
    done.id="complete";
    
    dele.textContent="Delete";
    done.textContent="Complete";
    
    th.textContent=task;
    th.appendChild(dele);
    th.appendChild(done);

    tr.appendChild(th);
    table.appendChild(tr);
    

    dele.addEventListener('click',function(){
        table.removeChild(tr);
    });

    done.addEventListener('click',function(){
        th.style.textDecoration = 'line-through';
    });

    document.querySelector('.task').value="";
    
}
