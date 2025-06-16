const area = {
    square: function (length) {
        return length * length
    },
    circle: function (radius) {
        return Math.PI * radius * radius
    },
    reactangle: function (width, height) {
        return width * height
    },
    triangle: function (base, height) {
        return (base * height) / 2
    }
}
module.exports = area;