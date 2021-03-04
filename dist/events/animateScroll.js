/**
 * Element scroll to posX, posY in delay then send callback
 * @param {HTMLElement} scroll  // the element to scroll
 * @param {number} delay  // timelap to scroll event
 * @param {number} posY  // the target scrollY in pixel
 * @param {number} posX  // the target scrollX in pixel
 * @param {Function} complete  // function called while scroll delay is complete
 */
export default (scroll, delay, posY, posX, complete) => {
    return new Promise(function (resolve, reject) {
        try {
            const startX = scroll.scrollLeft;
            const startY = scroll.scrollTop;
            const changeX = posX - startX;
            const changeY = posY - startY;
            let currentTime = 0;
            const increment = 20;
            Math.easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1)
                    return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            };
            const animateScroll = function () {
                currentTime += increment;
                const valY = Math.easeInOutQuad(currentTime, startY, changeY, delay);
                this.target.scrollTop = valY;
                const valX = Math.easeInOutQuad(currentTime, startX, changeX, delay);
                this.target.scrollLeft = valX;
                if (currentTime < delay) {
                    setTimeout(animateScroll, increment);
                }
                else {
                    if (complete)
                        complete({ message: 'complete' });
                    resolve({ message: 'complete' });
                }
            }.bind(this);
            animateScroll();
        }
        catch (err) {
            reject(err);
        }
    });
};
//# sourceMappingURL=animateScroll.js.map