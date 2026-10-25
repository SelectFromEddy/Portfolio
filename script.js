// Smooth fade-in animations

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    document.querySelectorAll(".section, .project-card, .stat-card").forEach((el) => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});
