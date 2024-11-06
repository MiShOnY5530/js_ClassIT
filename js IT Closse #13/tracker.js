const mouseDiv = document.getElementById('mouseDiv');
const output = document.getElementById('output');
mouseDiv.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    output.textContent = `Координати: (${x}, ${y})`;
});

mouseDiv.addEventListener('mousedown', function(event) {
    let button;
    if (event.button === 0) {
        button = 'ліва';
    } else if (event.button === 2) {
        button = 'права';
    }
    output.textContent = `Клік: ${button} кнопка миші`;
});

mouseDiv.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});