function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 101);
    document.getElementById('randomNumber').textContent = randomNumber;
}