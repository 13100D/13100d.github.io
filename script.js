const analyzeForm = document.getElementById('analyzeForm');
const resultDiv = document.getElementById('result');

analyzeForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const data = document.getElementById('data').value;

  try {
    const courseData = JSON.parse(data);
    const coursesWithGrades = analyzeCourses(courseData);
    displayResults(coursesWithGrades);
  } catch (error) {
    displayError("Invalid JSON data provided!");
  }
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
