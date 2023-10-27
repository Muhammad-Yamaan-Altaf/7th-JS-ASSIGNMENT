            // ! CHAPTERS 38 - 40
                    // * Q.1
function power(a, b) {
    if (b === 0) {
        return 1; 
    } else {
        var result = 1;
        var abs = Math.abs(b); 
        for (var i = 1; i <= abs; i++) {
            result *= a; 
        }
        if (b < 0) {
            return 1 / result; 
        } else {
            return result;
        }
    }
}
var base = +prompt("Write the number for which you want to find its power:");
var exponent = +prompt("Now enter the power of the number which you want to find:");
var result = power(base, exponent);
console.log(base + " raised to the power of " + exponent + " is: " + result);

                    // * Q.2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; 
    } else {
        return false; 
    }
}
var inputYear = parseInt(prompt("Enter a year:"));
if (isLeapYear(inputYear)) {
    console.log(inputYear + " is a leap year.");
} else {
    console.log(inputYear + " is not a leap year.");
}

                    // * Q.3
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateTriangleArea(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
var sideA = 3;
var sideB = 4;
var sideC = 5;
var area = calculateTriangleArea(sideA, sideB, sideC);
console.log("Area of the triangle with sides " + sideA + ", " + sideB )
function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
}
function calculatePercentage(totalMarks, maxMarks) {
    return (totalMarks / maxMarks) * 100;
}
function mainFunction(subject1, subject2, subject3, maxMarks) {
    var averageMarks = calculateAverage(subject1, subject2, subject3);
    var totalMarks = subject1 + subject2 + subject3;
    var percentage = calculatePercentage(totalMarks, maxMarks);
    console.log("Average Marks: " + averageMarks.toFixed(2));
    console.log("Percentage: " + percentage.toFixed(2) + "%");
}
var subject1Marks = 80;
var subject2Marks = 90;
var subject3Marks = 70;
var maxMarksPerSubject = 100; 
mainFunction(subject1Marks, subject2Marks, subject3Marks, maxMarksPerSubject);
+ ", and " + sideC + " is: " + area;

                    // * Q.4
function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
}
function calculatePercentage(totalMarks, maxMarks) {
    return (totalMarks / maxMarks) * 100;
}
function mainFunction(subject1, subject2, subject3) {
    var maxMarksPerSubject = 100; 
    var totalMarks = subject1 + subject2 + subject3;
    var averageMarks = calculateAverage(subject1, subject2, subject3);
    var percentage = calculatePercentage(totalMarks, maxMarksPerSubject);
    console.log("Average Marks: " + averageMarks.toFixed(2));
    console.log("Percentage: " + percentage.toFixed(2) + "%");
}
var subject1Marks = 80;
var subject2Marks = 90;
var subject3Marks = 70;
mainFunction(subject1Marks, subject2Marks, subject3Marks);

                    // *Q.5
function customIndexOf(inputString, targetChar) {
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === targetChar) {
            return i; 
        }
    }
    return -1; 
}
var inputString = "Hello, World!";
var targetChar = "o";
var index = customIndexOf(inputString, targetChar);
if (index !== -1) {
    console.log("The index of '" + targetChar + "' in the string is: " + index);
} else {
    console.log("'" + targetChar + "' not found in the string.");
}

                    // *Q.6
function removeVowels(sentence) {
    var modifiedSentence = sentence.replace(/[aeiouAEIOU]/g, '');
    return modifiedSentence;
}
var inputSentence = "Hello, World! This is a sample sentence.";
var modifiedSentence = removeVowels(inputSentence);
console.log("Sentence after removing vowels: " + modifiedSentence);

                    // *Q.7
function countSuccessiveVowelsOccurrences(sentence) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var i = 0; i < sentence.length - 1; i++) {
        var currentChar = sentence[i];
        var nextChar = sentence[i + 1];
        if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
            count++;
        }
    }
    return count;
}
var inputSentence = "Pleases read this application and give me gratuity";
var occurrencesCount = countSuccessiveVowelsOccurrences(inputSentence);
console.log("Number of occurrences of any two vowels in succession: " + occurrencesCount);

                    // *Q.8
function convertToMeters(kilometers) {
    return kilometers * 1000;
}
function convertToFeet(kilometers) {
    return kilometers * 3280.84;
}
function convertToInches(kilometers) {
    return kilometers * 39370.1;
}
function convertToCentimeters(kilometers) {
    return kilometers * 100000;
}
var distanceInKilometers = parseFloat(prompt("Enter distance between two cities in kilometers:"));
var meters = convertToMeters(distanceInKilometers);
var feet = convertToFeet(distanceInKilometers);
var inches = convertToInches(distanceInKilometers);
var centimeters = convertToCentimeters(distanceInKilometers);
console.log("Distance in Meters: " + meters + " meters");
console.log("Distance in Feet: " + feet + " feet");
console.log("Distance in Inches: " + inches + " inches");
console.log("Distance in Centimeters: " + centimeters + " centimeters");

                    // *Q.9
function calculateOvertimePay(hoursWorked, hourlyRate) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    var overtimeHours = Math.max(hoursWorked - regularHours, 0);
    var overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
}
var hoursWorked = parseInt(prompt("Enter total hours worked by the employee:"));

if (hoursWorked > 40) {
    var overtimePay = calculateOvertimePay(hoursWorked, 12.00);
    console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
} else {
    console.log("No overtime pay for the employee.");
}

                    // *Q.10
function calculateCurrencyNotes(amountInHundreds) {
    var denomination100 = 100;
    var denomination50 = 50;
    var denomination10 = 10;
    var notes100 = Math.floor(amountInHundreds); 
    var remainingAmount = amountInHundreds - notes100; 
    var notes50 = Math.floor(remainingAmount / (denomination50 / 100));
    var notes10 = Math.floor((remainingAmount % (denomination50 / 100)) * 10); 
    console.log("Number of 100 rupee notes: " + notes100);
    console.log("Number of 50 rupee notes: " + notes50);
    console.log("Number of 10 rupee notes: " + notes10);
}
var amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
calculateCurrencyNotes(amountInHundreds);
