from flask import Flask, render_template, request
import json

def analyze_courses(data):
  """
  Analyzes course data and returns a list of course names and grades.

  Args:
    data: A JSON array containing course information.

  Returns:
    A list of tuples, where each tuple contains the course name and grade (or 'Ungraded' if applicable).
  """
  courses = []
  for course_data in data:
    course_name = course_data["syllabusCourse"]["code"]
    grade_info = course_data.get("forcedGrade")  # Check for forced grade
    if grade_info:
      grade = grade_info["code"]
    else:
      grade = "Ungraded"  # Course might be ungraded
    courses.append((course_name, grade))
  return courses

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def analyze():
  if request.method == 'POST':
    data = request.form['data']
    try:
      course_data = json.loads(data)
      courses_with_grades = analyze_courses(course_data)
      return render_template('result.html', courses=courses_with_grades)
    except json.JSONDecodeError:
      return render_template('error.html', error_message="Invalid JSON data provided!")
  return render_template('index.html')

if __name__ == '__main__':
  app.run(debug=True)
