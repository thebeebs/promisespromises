'use strict';
addElement("first")
.then(x => {return addElement("second")})
.then(x => { return addElement("third")})
.then(x => { return addElement("fourth")})

function addElement(elementText){
    var myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        var element=document.createElement('H1');
        element.innerText = `${elementText} ${Date.now()}`;
        document.body.appendChild(element);
        resolve();
    }, Math.random() * 2000);
});
return myPromise;}
// // document.body.appendChild(first);
//
 // document.body.appendChild(second); 
// doThisStuff()
// async function doThisStuff(){
//    await addElement(first);
//    await addElement(second);
//    await addElement(third);   
// }