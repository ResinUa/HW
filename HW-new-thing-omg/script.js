document.getElementById('ig').addEventListener('click', () => {
    radius = prompt('radius');
    alert(radius ** 2 * Math.PI);
    
    num1 = prompt('number');
    alert(Math.abs(num1));
    
    a = prompt('ur stupid lmao');
    alert(a * Math.sqrt(2));
    
    a1 = prompt('a in triangle');
    h = prompt('h in triangle');
    alert((a1 * h)/2);
    
    num2 = prompt('number ig');
    alert(Math.round(num2));
    
    num3 = prompt('number ig down');
    alert(Math.floor(num3));
    
    num41 = prompt('number omg');
    num42 = prompt('number omg2');
    alert(Math.max(num41, num42));
    alert(Math.min(num41, num42));
    
    num5 = prompt('squaaaare');
    alert(Math.pow(num5, 2));
    
    num6 = prompt('roooot');
    alert(Math.sqrt(num6));
    alert(Math.cbrt(num6));
    
    num71 = prompt('number again');
    num72 = prompt('number again2');
    alert(Math.pow(num71, num72));
    
    num81 = prompt('diagonal deez nuts');
    num82 = prompt('diagonal deez nuts2');
    
    alert(Math.sqrt(num81 ** 2 + num82 ** 2))
    alert(Math.random());
    alert(Number.parseInt(Math.random()*10));
    alert(Number.parseInt(Math.random()*100));
});

document.getElementById('ig2').addEventListener('click', () => {
    num21 = Number.parseInt(Math.random()*100);
    num212 = Number.parseInt(Math.random()*100);
    num213 = Number.parseInt(Math.random()*100);
    alert(Math.max(num21, num212, num213));
    
    thousand = 1000;
    alert('знижка woaw');
    alert("АЖ " + (thousand * Number.parseInt(Math.random(0.1)*0.5)));

    num22 = prompt('why are we doing this again?');
    alert("тіпа то чісло до 2 це " + Math.pow(num22, 2));

    num23 = Math.random()*100;
    num231 = Math.random()*100;
    alert("допустім це " + Math.abs(num23 - num231));
});