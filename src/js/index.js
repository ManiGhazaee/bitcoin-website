const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
                if (entry.isIntersecting) {
                        if (entry.target.classList.contains("to-top")) {
                                entry.target.classList.add("visible");
                                entry.target.classList.add("to-top-visible");
                        } else if (entry.target.classList.contains("to-right")) {
                                entry.target.classList.add("visible");
                                entry.target.classList.add("to-right-visible");
                        }
                } else {
                        if (entry.target.classList.contains("to-top")) {
                                entry.target.classList.remove("visible");
                                entry.target.classList.remove("to-top-visible");
                        } else if (entry.target.classList.contains("to-right")) {
                                entry.target.classList.remove("visible");
                                entry.target.classList.remove("to-right-visible");
                        }
                }
        });
});

const hiddenElems = document.querySelectorAll(".hidden");

hiddenElems.forEach((elem) => observer.observe(elem));
