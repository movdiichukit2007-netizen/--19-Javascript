// Функція для перевірки коректності оцінки
function checkGrade(grade) {
    if (typeof grade !== "number" || isNaN(grade)) {
        return false;
    }
    if (grade < 0 || grade > 100) {
        return false;
    }
    return true;
}

// Функція для розрахунку середньої оцінки
function calculateAverage(grades) {
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        let currentGrade = grades[i];

        if (!checkGrade(currentGrade)) {
            console.log("Помилка: оцінка '" + currentGrade + "' не є числом або виходить за межі від 0 до 100!");
            return;
        }

        sum += currentGrade;
    }

    let avg = sum / grades.length;
    console.log("Середня оцінка студента: " + avg);
}

// Приклади для перевірки
let studentGrades = [85, 90, 78, 92, 88, 'A'];
calculateAverage(studentGrades);

let validGrades = [85, 90, 78, 92, 88];
calculateAverage(validGrades);
