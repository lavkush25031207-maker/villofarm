function updateClone() {
    const original = document.querySelector('.cow-scatch');
    const target = document.querySelector('.cow-scatch-clone');

    // Desktop (>= 768px)
    if (window.innerWidth >= 768) {

        // Agar clone nahi hai tabhi banaao
        if (!target.querySelector('.cow-scatch')) {
            const clone = original.cloneNode(true);
            target.appendChild(clone);
        }

        // Original hide
        original.style.display = "none";

    } else {

        // Mobile (<768px) — clone hatao
        const cloned = target.querySelector('.cow-scatch');
        if (cloned) cloned.remove();

        // Original wapas dikhado
        original.style.display = "block";
    }
}

// Page load par run
updateClone();

// Resize par auto update
window.addEventListener("resize", updateClone);
