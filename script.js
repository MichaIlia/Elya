document.addEventListener('DOMContentLoaded', function() {

    const heartBtn = document.getElementById('heartButton');
    const messageBox = document.getElementById('heartMessage');

    const messages = [
        "Я люблю тебя! ❤️",
        "Ты — самая красивая девушка в мире! ✨",
        "Сейчас бы утонуть в твоих глазах... 🌟",
        "Я жду гс где ты смеешься, а ой, кружочек) 💓",
        "Спасибо, что ты со мной. Ты мое счастье! 🥰",
        "Каждый день проведенный с тобой — это лучший день. 🎁",
        "Не переставай улыбаться! 😊",
        "С 8 Марта, моя принцесса! 👑",
        "Твои губки — моя любимая конфетка! 🍬",
        "Глядя на тебя, я каждый раз влюбляюсь заново... 💘"
    ];

    heartBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];

        messageBox.textContent = randomMessage;

        messageBox.style.opacity = '1';

        heartBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            heartBtn.style.transform = 'scale(1)';
        }, 150);
    });

    console.log("Сайт для любимой принцессы! ❤️");

    const images = document.querySelectorAll('.gallery-img');
    
    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.5 });

        images.forEach(img => {
            img.style.opacity = '0.5';
            img.style.transform = 'scale(0.95)';
            img.style.transition = 'opacity 0.5s, transform 0.5s';
            observer.observe(img);
        });
    }
});