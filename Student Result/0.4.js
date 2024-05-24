function calculateGrade() {
    // Getting input values
    let name = document.getElementById("name").value;
    let standard = document.getElementById("std").value;
    let sub_1 = parseInt(document.getElementById("maths").value);
    let sub_2 = parseInt(document.getElementById("english").value);
    let sub_3 = parseInt(document.getElementById("gujarati").value);
    let sub_4 = parseInt(document.getElementById("science").value);
    let sub_5 = parseInt(document.getElementById("hindi").value);


    if (sub_1 < 33 || sub_2 < 33 || sub_3 < 33 || sub_4 < 33 || sub_5 < 33) {
        document.getElementById("dis").innerHTML = "Failed";
        
    }
    let totalMarks = sub_1 + sub_2 + sub_3 + sub_4 + sub_5;
    let percentage = (totalMarks / 500) * 100;

    
    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    }

    else {
        grade = 'F';
    }

    let table = "<table border='3'>";
    table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
    table += "<tr><td>Standard:</td><td>" + standard + "</td></tr>";
    table += "<tr><td>Total Marks:</td><td>" + totalMarks + "</td></tr>";
    table += "<tr><td>Percentage:</td><td>" + percentage+ "%</td></tr>";
    table += "<tr><td>Grade:</td><td>" + grade + "</td></tr>";
    table += "</table>";

    document.getElementById("dis").innerHTML = table;
}