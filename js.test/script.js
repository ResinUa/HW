const button = document.getElementById('haii');

button.addEventListener('click', function showMassage() {
    
    let haii = prompt('Are you cutie?').trim();
    
    if (haii === 'yes' || haii === 'yes:3' || haii === ':3' || haii === 'sure' 
        || haii === 'ofc' || haii === 'Yes' || haii === 'Yes:3' || haii = 'Sure') {  
        alert('Haii:3:3');
    } else {
        alert('Think again');
    }
});
