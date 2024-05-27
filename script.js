const dataUploadDiv = document.getElementById('dataUpload');
const analyzeButton = document.getElementById('analyzeButton');
const resultDiv = document.getElementById('result');

analyzeButton.addEventListener('click', function() {
  const dataFile = document.getElementById('dataFile').files[0];
  if (!dataFile) {
    displayError("Please select a JSON file to upload.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const data = event.target.result;
    try {
      const courseData = JSON.parse(data);
      const coursesWithGrades = analyzeCourses(courseData);
      displayResults(coursesWithGrades);
    } catch (error) {
      displayError("Invalid JSON data in uploaded file!");
    }
  };
  reader.readAsText(dataFile);
});

function analyzeCourses(data) {
  const courses = [];
  for (const courseData of data) {
    const courseName = courseData.syllabusCourse.code;
    const gradeInfo = courseData.forcedGrade; // Check for forced grade
    const grade = gradeInfo ? gradeInfo.code : "Ungraded";
    courses.push([courseName, grade]);
  }
  return courses;
}

function displayResults(courses) {
  let resultHtml = "<h2>Course Grades</h2><ul>";
  for (const course of courses) {
    resultHtml += `<li>Course Name: ${course[0]}, Grade: ${course[1]}</li>`;
  }
  resultHtml += "</ul>";
  resultDiv.innerHTML = resultHtml;
}

function displayError(errorMessage) {
  resultDiv.innerHTML = `<p class="error">Error: ${errorMessage}</p>`;
}
