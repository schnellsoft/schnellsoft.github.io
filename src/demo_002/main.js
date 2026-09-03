````javascript
/**
 * Calculates the area of a circle given its radius.
 *
 * @param {number} radius - The radius of the circle. Must be a positive number.
 * @returns {number} The calculated area of the circle.
 *
 * @example
 * const area = calculateCircleArea(5);
 * console.log(area); // 78.53981633974483
 */
function calculateCircleArea(radius) {
    // Input validation: ensure radius is a valid, positive number
    if (typeof radius !== "number" || Number.isNaN(radius)) {
        throw new TypeError("radius must be a valid number");
    }

    if (radius <= 0) {
        throw new RangeError("radius must be a positive number");
    }

    const circleArea = Math.PI * radius ** 2;
    return circleArea;
}
````