


// const tabitems = document.querySelectorAll(".tab-item");
// const tabContentitems = document.querySelectorAll(".tab-content-item");
// function selectItem(e){
//     removeBorder();
//     removeShow();
//  this.classList.add("tab-border");
//   const tabContentitems = document.querySelector(`#${this.id}-content`);
//   tabContentitems.classList.add("show");
// }
// function removeBorder(){
//     tabitems.forEach(item =>item.classList.remove("tab-border"));
// }
// function removeShow(){
//     tabContentitems.forEach(item =>item.classList.remove("show"));
// }
// tabitems.forEach(item => item.addEventListener
//     ("click", selectItem));

const comp = [
    {name:"john", sex:"female", state:"deltA", start: "1990"},
    {name:"paul", sex:"male", state:"aba", start: "1890"},
    {name:"msps", sex:"female", state:"ebonyi", start: "1790"},
    {name:"maks", sex:"male", state:"benin", start: "1890"},
    {name:"maks", sex:"male", state:"anabra", start: "2020"},
    {name:"maks", sex:"female", state:"kogi", start: "1991"},
    {name:"maks", sex:"male", state:"jos", start: "1994"},
    {name:"maks", sex:"female", state:"benin", start: "2053"}
];


const comeighties   = comp.filter(compi => (compi.start >= 1890 && compi.start < 2060));
console.log(comeighties);