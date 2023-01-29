(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const parents = document.querySelectorAll(".parents > * > span");
    if (parents) {
        let index = 0;
        parents.forEach((element => {
            index++;
            element.classList.add(`parent_${index}`);
        }));
    }
    const children = document.querySelectorAll(".children > * > span");
    if (children) {
        let index = 0;
        children.forEach((element => {
            index++;
            element.classList.add(`child_${index}`);
        }));
    }
    const showCurrent = document.querySelector(".show__current");
    const showNeeded = document.querySelector(".show__needed");
    showCurrent.innerHTML = "None";
    showNeeded.innerHTML = "None";
    const bodyElement = document.querySelector("body");
    bodyElement.classList.add("regular-mode");
    document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.closest(".reverse")) {
            bodyElement.classList.toggle("reverse-mode");
            bodyElement.classList.toggle("regular-mode");
        }
        if (!bodyElement.classList.contains(".reverse-mode")) if (targetElement.closest(".parent")) {
            const num = targetElement.className;
            const numLast = num.substr(-1);
            const childNeeded = `child_${numLast}`;
            const childCurrent = document.querySelector(`.${childNeeded}`);
            showCurrent.innerHTML = targetElement.innerHTML;
            showNeeded.innerHTML = childCurrent.innerHTML;
        }
        if (!bodyElement.classList.contains(".regular-mode")) if (targetElement.closest(".child")) {
            const num = targetElement.className;
            const numLast = num.substr(-1);
            const parentNeeded = `parent_${numLast}`;
            const parentCurrent = document.querySelector(`.${parentNeeded}`);
            showCurrent.innerHTML = targetElement.innerHTML;
            showNeeded.innerHTML = parentCurrent.innerHTML;
        }
    }
    window["FLS"] = true;
    isWebp();
})();