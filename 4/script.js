"use strict";
/**
 * @param {number} time Время в часах, необходимое на проект
 * @param {boolean} priority Булево значение, указывающее на срочность проекта
 * @returns {number} Стоимость проекта
*/
function projectCalculations(time, priority) {
    if (typeof (time) != "number") throw new TypeError("time must be a number");
    if (typeof (priority) != "boolean") throw new TypeError("priority must be a boolean");
    if (time <= 0) throw new Error("time must be a positive number");
    const ratePerHour = 1000;

    if (priority) {
        return time / 2 * ratePerHour * 2.5;
    }

    if (time > 150) {
        return time * (ratePerHour - 250);
    }

    return time * ratePerHour;
}

console.log(projectCalculations(10, true));