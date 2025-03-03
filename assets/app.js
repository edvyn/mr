document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.hidden-content');

    if (hiddenElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        hiddenElements.forEach(element => observer.observe(element));
    }
});

document.querySelectorAll('.container-roadmap .tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.container-roadmap .tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.container-roadmap .tab-content2').forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.target).classList.add('active');
    });
});

