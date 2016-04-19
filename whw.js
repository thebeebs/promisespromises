'use strict';
addElement("first")
.then(x => {return addElement("second")})
.then(x => { return addElement("third")})
.then(x => { return addElement("fourth")})

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
        var element=document.createElement('H1');
        element.innerText = `${elementText} ${Date.now()}`;
        document.body.appendChild(element);
        resolve();
    }, Math.random() * 2000);
})}