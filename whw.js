'use strict';
var first=document.createElement('H1');
first.innerText = 'First';

var second=document.createElement('H1');
second.innerText = 'Second';

var third=document.createElement('H1');
third.innerText = 'Third'; 

var fourth=document.createElement('H1');
fourth.innerText = 'Fourth'; 

// // document.body.appendChild(first);
// // document.body.appendChild(second); 
// doThisStuff()
// async function doThisStuff(){
//    await addElement(first);
//    await addElement(second);
//    await addElement(third);   
// }

addElement(first)
.then(x => addElement(second))
.then(x => addElement(third))
.then(x => addElement(fourth))

function addElement(element){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        document.body.appendChild(element);
        resolve();
    }, Math.random() * 2000);
})}