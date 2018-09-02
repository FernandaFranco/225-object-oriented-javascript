/*
input: name, year
output: object with methods: info, addCourse, listCourses, addNote, updateNote, viewNotes
*/

function createStudent(name, year) {
  var courses = [];
  return {
    info: function() {
      console.log(name + ' is a ' + year + ' year student');
    },
    addCourse: function(course) {
      courses.push(course);
    },
    listCourses: function() {
      return courses;
    },
    addNote: function(code, note) {
      var i;

      for (i = 0; i < courses.length; i += 1) {
        if (courses[i].code === code) {
          courses[i].note = courses[i].note || '';
          courses[i].note = courses[i].note.concat(note, ' ');
          break;
        }
      }
    },
    updateNote: function(code, note) {
      var i;

      for (i = 0; i < courses.length; i += 1) {
        if (courses[i].code === code) {
          courses[i].note = note;
          break;
        }
      }
    },
    viewNotes: function() {
      for (i = 0; i < courses.length; i += 1) {
        if (courses[i].note) {
          console.log(courses[i].name + ': ' + courses[i].note);
        }
      }
    },
  }
}

foo = createStudent('Foo', '1st');
foo.info();
console.log(foo.listCourses());
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
console.log(foo.listCourses());
foo.addNote(102, 'Difficult subject');
foo.updateNote(101, 'Fun course');
console.log(foo.listCourses());
foo.viewNotes();
