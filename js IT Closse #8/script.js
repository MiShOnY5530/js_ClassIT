const loadingBar = document.querySelector('.loading-bar');
const loadingPercentage = document.querySelector('.loading-percentage');

function updateProgress(progress) {
    loadingBar.style.width = `${progress}%`;
    loadingPercentage.textContent = `${progress}%`;
}

// Приклад використання
updateProgress(10);
setTimeout(() => updateProgress(20), 200);
setTimeout(() => updateProgress(40), 400);
setTimeout(() => updateProgress(60), 600);
setTimeout(() => updateProgress(80), 800);
setTimeout(() => updateProgress(100), 1000);



//