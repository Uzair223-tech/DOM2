// console.log(document.body);
// console.log(document.body.children);

// console.log(document.body.firstElementChild);
// console.log(document.body.firstChild);

// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.parentElement);
// console.log(document.body.lastElementChild.parentElement);

// console.log(document.body.firstElementChild.children[2].parentElement);

// console.log(document.body.hasChildNodes());
// let a = Array.from(document.body.childNodes)
// console.log(typeof a);


// console.log(document.body.childNodes);


//ACCESSING TABLE THROUGH DOM
// let table = document.body.firstElementChild
// console.log(table.rows);
// console.log(table.caption);
// console.log(table.thead);
// console.log(table.tfoot);
// console.log(table.tbodies);

// console.log(document.querySelector(".cls-1").style.backgroundColor="red");
// let b = document.querySelectorAll(".cls-1");
// console.log(b.length);
// for(let i=0 ; i<b.length ; i++){
//     console.log(b[i].style.backgroundColor="red");
// }
// b.forEach((i)=>{
//     console.log(i.style.backgroundColor="blue");
    
// })

// console.log(document.getElementsByTagName("div").forEach((i)=>{
//     console.log(i.style.Color="blue");
// }));



// let c = document.getElementsByTagName("div");
// console.log(c.length);
// c.forEach((index)=>{
//     console.log(c[index]);
    
// })
// for(let i=0 ; i<c.length ; i++){
//         console.log(c[i]);
//     }


//MATCHES CLOSEST AND CONTAINS METHODS
// let d = document.getElementsByClassName("parent");
// console.log(d);

// let b = document.querySelector(".cls-1");
// console.log(b.matches(".cls-1"));

// c = b.nextElementSibling;
// // console.log(c);

// console.log(c.closest(".cls-1"));
// console.log(document.querySelector(".parent").contains(document.querySelector(".cls-1")));



// console.log("hello world");
// let ran = Math.random();
// console.log(ran);
// console.log(ran.toString().length);
// console.log(ran.toString(16));
// console.log(ran.toString(16).length);
// let d = ran.toString(16).slice(2,8);
// let finD = `#${d}`
// console.log(finD);
// let a = document.querySelector(".cls-1");
// console.log(a.style.backgroundColor=`#${d}`);
const func = ()=>{

    let ran = Math.random();
    let d = ran.toString(16).slice(2,8);
    let finD = `#${d}`;
    let coll = document.body.firstElementChild.children;
    console.log(coll.length);
    for(let index=0 ; index<coll.length ; index++){
        console.log(coll[index].style.backgroundColor=`#${d}`);
        
    }
}

//OTHER PROPERTIES
let p1 = document.querySelector(".pp-1");
console.log(p1.tagName);
let p2 = document.querySelector(".parent");
console.log(p2.firstChild.nodeName);
console.log(p1.innerHTML);
console.log(p1.outerHTML);
console.log(p1.textContent);
console.log(p1.hidden);

//ATTRIBUTE METHODS
console.log(p1.hasAttribute("class"));
// console.log(p1.removeAttribute("class"));
console.log(p1.setAttribute("id" , "box"));
console.log(document.getElementById("box"));
console.log(p1.getAttribute("id"));
console.log(p1.attributes);
console.log(p1.dataset.one);
console.log(p1.className="apple");
let p3 = document.querySelector(".pp");
console.log(p3);

console.log(p1.insertAdjacentHTML("beforeend","<h1>Hello first</h1>"));














