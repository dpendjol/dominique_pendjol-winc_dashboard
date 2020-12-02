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

/**
 * Gets a the assignment names that are in the data
 * @param {Array} data 
 */
export const getAssignmentNames = (data) => {
    return data.reduce((uniqueAssignments, next) => {
        if (!uniqueAssignments.includes(next[1])) {
            return [...uniqueAssignments, next[1]];
        }
        return uniqueAssignments;
    },[]);
}

/**
 * 
 * @param {Array} data contains array-container with arrays.
 * @param {Array} assignments containing string of unique assignment names
 * @returns {Array} returns an array with objects containing keys: assignment, gradeDifficulty, gradeFun
 */
export const calculateAveragePerAssignment = (data, assignments) => {
    let myObject =[];
    assignments.forEach(assignment => {
        let i = 0;
         const totals = data.reduce((total, next) => {
            if (next.includes(assignment)) {
                total[0] = total[0] + parseInt(next[2], 10);
                total[1] = total[1] + parseInt(next[3], 10);
                i = i + 1;
            }
            return total;
        }, [0, 0])
        myObject = [...myObject, {assignment: assignment, gradeDifficulty: totals[0] / i, gradeFun: totals[1] / i}]
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
        })
    return {difficulty: difficulty, fun: fun}
}

/**
 * Gets a the student names that are in the data
 * @param {Array} data
 * @return {Array} list of students 
 */
export const getListOfStudents = (data) => {
    return data.reduce((uniqueStudents, next) => {
        if (!uniqueStudents.includes(next[0])) {
            return [...uniqueStudents, next[0]];
        }
        return uniqueStudents;
    },[])
}

/**
 * Filters out the sub-array's from the user name
 * @param {Array} data 
 * @param {String} name 
 * @returns array with array's that contain the grades per assignment from one student, name
 */
export const filterData = (data, names) => {
    return data.reduce((dataName, next) => {
        if (names.includes(next[0])) {
            return [...dataName, next]
        }
        return dataName;
    },[])
}