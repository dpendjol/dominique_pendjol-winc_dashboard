/**
 * 
 * @param {Array} data array of arrays, container array, constisting of array of 4 elements, 0 = name, 1 = assignment, 2 = grade difficulty, 3 = grade fun
 * @returns {Array} array of objects with keys student, assignment, gradeDifficulty, gradeFun
 */
export const convertToObject = (data) => {
    return data.map(item => {
        const [student, assignment, gradeDifficulty, gradeFun] = item;
        return {
            student: student,
            assignment: assignment,
            gradeDifficulty: gradeDifficulty,
            gradeFun: gradeFun
        };
    });
}