/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let counter = 0;
    let orderedSeats = seats.sort((a, b) => a - b);
    let orderedStudents = students.sort((a, b) => a - b);

    orderedSeats.forEach((value, index) =>{
        counter += Math.abs(value - orderedStudents[index]);
    });

    return counter;
};

console.log(minMovesToSeat([4,1,5,9], [1,3,2,6])); // 4