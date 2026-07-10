const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const count = document.getElementById("count");


let countjs = localStorage.getItem("count") || 0;
count.innerHTML = countjs;

minus.addEventListener("click", ()=>{
    countjs--;
    count.innerHTML = countjs;
    localStorage.setItem("count", countjs);
});

plus.addEventListener("click", ()=>{
    countjs++;
    count.innerHTML = countjs;
    localStorage.setItem("count", countjs);
});

document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear('count');
})