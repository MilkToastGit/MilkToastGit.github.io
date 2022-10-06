const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function pxToNumber(pxString) {
    return Number(pxString.slice(0, -2));
}