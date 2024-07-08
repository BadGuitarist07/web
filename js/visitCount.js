if (localStorage.getItem('visitCount') === null ) {
    localStorage.setItem('visitCount', 0);
}

let currentCount = parseInt(localStorage.getItem('visitCount'));

// aumentar el contador en +1
currentCount++;

localStorage.setItem('visitCount', currentCount);

document.getElementById('visitCount').textContent = currentCount;