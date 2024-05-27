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

// ... rest of the code for analyzeCourses, displayResults, and displayError functions (same as before)
