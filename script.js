function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    const sparkleCount = 50;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.animationDuration = `${2 + Math.random() * 2}s`;

        sparklesContainer.appendChild(sparkle);
    }
}

document.addEventListener('DOMContentLoaded', createSparkles);
