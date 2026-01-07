function areaTriangle(base, height) {
    return 0.5 * base * height;
}

function areaCircle(radius) {
    return Math.PI * radius * radius;
}

function areaSqr(w,l){
    return w*l;
}

export { areaTriangle, areaCircle, areaSqr };