function createStudent(name, year) {
  return {
    courses: [],
    name: name,
    year: year,
    info: function() {
      console.log(this.name + ' is a ' + this.year + ' year student');
    },
    addCourse: function(course) {
      this.courses.push(course);
    },
    listCourses: function() {
      return this.courses;
    },
    addNote: function(code, note) {
      var i;

      for (i = 0; i < this.courses.length; i += 1) {
        if (this.courses[i].code === code) {
          this.courses[i].note = this.courses[i].note || '';
          this.courses[i].note = this.courses[i].note.concat(note, ' ');
          break;
        }
      }
    },
    updateNote: function(code, note) {
      var i;

      for (i = 0; i < this.courses.length; i += 1) {
        if (this.courses[i].code === code) {
          this.courses[i].note = note;
          break;
        }
      }
    },
    viewNotes: function() {
      for (i = 0; i < this.courses.length; i += 1) {
        if (this.courses[i].note) {
          console.log(this.courses[i].name + ': ' + this.courses[i].note);
        }
      }
    },
  }
}

var school = {
  students: [],
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) > -1) {
      var student = createStudent(name, year);
      this.students.push(createStudent(name, year));
      return student;
    } else {
      console.log('Invalid Year');
    }
  },
  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },
  addGrade: function(student, courseName, grade) {
    var course = student.listCourses().filter(function(course) {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },
  getReportCard: function(student) {
    student.listCourses().forEach(function(course) {
      if (course.grade) {
        console.log(course.name + ': ' + String(course.grade));
      } else {
        console.log(course.name + ': In progress');
      }
    });
  },
  courseReport: function(courseName) {
    var course;
    var total = 0;
    var gradesNumber = 0;

    this.students.forEach(function(student) {
      course = student.listCourses().filter(function(course) {
        return course.name === courseName;
      })[0];
      if (course && course.grade) {
        console.log('=' + courseName + ' Grades=');
        total += course.grade;
        gradesNumber += 1;
        console.log(student.name + ': ' + course.grade);
      }
    });

    if (course) {
      console.log('---');
      console.log('Course Average: ' + String(total/gradesNumber));
    } else {
      console.log('undefined');
    }
  },
};

school.addStudent('foo', '3rd');
school.enrollStudent('foo', { name: 'Math', code: 101, });
school.enrollStudent('foo', { name: 'Advanced Math', code: 102, });
school.enrollStudent('foo', { name: 'Physics', code: 202, });
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

school.getReportCard('foo');

school.addStudent('bar', '1st');
school.enrollStudent('bar', { name: 'Math', code: 101, });
school.addGrade('bar', 101, 91);

school.getReportCard('bar');

school.addStudent('qux', '2nd');
school.enrollStudent('qux', { name: 'Math', code: 101, });
school.enrollStudent('qux', { name: 'Advanced Math', code: 102, });
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.getReportCard('qux');

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
