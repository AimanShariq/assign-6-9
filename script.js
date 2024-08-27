function calculateResults() {
    // Get subject names
    let subject1 = document.getElementById('subject1').value;
    let subject2 = document.getElementById('subject2').value;
    let subject3 = document.getElementById('subject3').value;
    
    // Get marks
    let marks1 = parseInt(document.getElementById('marks1').value);
    let marks2 = parseInt(document.getElementById('marks2').value);
    let marks3 = parseInt(document.getElementById('marks3').value);
    
    // Total marks for each subject
    const totalMarksPerSubject = 100;
    
    // Calculate total marks and percentage
    let totalMarks = marks1 + marks2 + marks3;
    let percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;
    
    // Display results
    document.getElementById('subject1Name').innerText = subject1;
    document.getElementById('subject1Marks').innerText = marks1;
    document.getElementById('subject2Name').innerText = subject2;
    document.getElementById('subject2Marks').innerText = marks2;
    document.getElementById('subject3Name').innerText = subject3;
    document.getElementById('subject3Marks').innerText = marks3;
    document.getElementById('totalMarks').innerText = totalMarks;
    document.getElementById('percentage').innerText = percentage.toFixed(2) + '%';
}
