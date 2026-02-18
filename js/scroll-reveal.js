// 1) Marks that JS is running (so CSS can safely hide/reveal)
document.documentElement.classList.add("js");

window.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fade-in");

    // If no items, nothing to do
    if (!items.length) return;

    // If IntersectionObserver isn't supported, show everything
    if (!("IntersectionObserver" in window)) {
        items.forEach(el => el.classList.add("is-visible"));
        return;
    }

    // Stagger delays (only for gallery tiles)
    let step = 0;
    items.forEach((el) => {
        if (el.classList.contains("gallery-item")) {
            el.style.transitionDelay = `${(step % 6) * 90}ms`;
            step++;
        } else {
            el.style.transitionDelay = "0ms";
        }
    });

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.095,
            rootMargin: "0px 0px 25% 0px"
        }
    );


    items.forEach((el) => observer.observe(el));
});
