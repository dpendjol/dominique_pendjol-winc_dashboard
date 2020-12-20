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
            gradeDifficulty: parseInt(gradeDifficulty, 10),
            gradeFun: parseInt(gradeFun, 10)
        };
    });
}

/**
 * Gets a the assignment names that are in the data
 * @param {Array} data 
 */
export const getAssignmentNames = (data) => {
    return data.reduce((uniqueAssignments, next) => {
        if (!uniqueAssignments.includes(next.assignment)) {
            return [...uniqueAssignments, next.assignment];
        }
        return uniqueAssignments;
    },[]);
}

/**
 * Gets a the student names that are in the data
 * @param {Array} data
 * @return {Array} list of students 
 */
export const getStudentNames = (data) => {
    return data.reduce((uniqueStudents, next) => {
        if (!uniqueStudents.includes(next.student)) {
            return [...uniqueStudents, next.student];
        }
        return uniqueStudents;
    },[])
}

/**
 * 
 * @param {Array} data contains array-container with arrays.
 * @param {Array} assignments containing string of unique assignment names
 * @returns {Array} returns an array with objects containing keys: assignment, gradeDifficulty, gradeFun
 */
export const calculateAveragePerAssignment = (data, assignments) => {
    let myObject = [];
    assignments.forEach(assignment => {
        let i = 0;
         const totals = data.reduce((total, next) => {
            if (next.assignment === assignment) {
                total.gradeDifficulty = total.gradeDifficulty + next.gradeDifficulty;
                total.gradeFun = total.gradeFun + next.gradeFun;
                i += 1;
            }
            return total;
        }, {gradeDifficulty: 0, gradeFun: 0})
        myObject = [...myObject, {x: assignment, gradeDifficulty: totals.gradeDifficulty / i, gradeFun: totals.gradeFun / i}]
    })
    return myObject;
}

export const calculateAveragePerStudent = (data, students) => {
    let myObject = [];
    students.forEach(student => {
        let i = 0;
        const totals = data.reduce((total, next) => {
            if (next.student === student) {
                total.gradeDifficulty = total.gradeDifficulty + next.gradeDifficulty;
                total.gradeFun = total.gradeFun + next.gradeFun;
                i += 1
            }
            return total;
        }, {gradeDifficulty: 0, gradeFun: 0})
        myObject = [...myObject, {x: student, gradeDifficulty: totals.gradeDifficulty / i, gradeFun: totals.gradeFun / i}]
    })
    return myObject;
}

/** OBSOLETE!!
 * converts the above dataset to a object containing 2 array's to display on ChartBar
 * @param {Array} data 
 */
export const buildChartBarDataSet = (data) => {
    let difficulty = [];
    let fun = [];
    data.map(item => {
        difficulty = [...difficulty, {
                x: item.assignment, 
                y: item.gradeDifficulty}
            ] 
        fun =  [...fun, {
                x: item.assignment, 
                y: item.gradeFun}
            ] 
        return undefined;
        })
    return {difficulty: difficulty, fun: fun}
}

/**
 * Filters out the sub-array's from the user name
 * @param {Array} data 
 * @param {String} name 
 * @returns array with array's that contain the grades per assignment from one student, name
 */
export const filterDataStudent = (data, names) => {
    return data.reduce((dataName, next) => {
        if (names.includes(next.student)) {
            return [...dataName, next]
        }
        return dataName;
    },[])
}

export const filterDataAssignment = (data, assignments) => {
    return data.reduce((dataAssignment, next) => {
        if (assignments.includes(next.assignment)) {
            return [...dataAssignment, next]
        }
        return dataAssignment;
    },[])
}