function checkGrade(grade) {
    if (typeof grade !== "number" || isNaN(grade)) {
        return false;
    }
    if (grade < 0 || grade > 100) {
        return false;
    }
    return true;
}

function calculateAverage(grades) {}
