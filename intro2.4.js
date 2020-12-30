/*
    var student1Courses = ['Math', 'English', 'Programming'];
    var student2Courses = ['Geography', 'Spanish', 'Programming'];
    Cree un programa que recorra las 2 matrices; si hay cursos comunes, imprímalos en la consola.
*/

var student1Courses = ['Math', 'English', 'Programming', 'Geography'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
var studentCoursesTotal = [];
var coursesDuplicates = [];

studentCoursesTotal = student1Courses.concat(student2Courses);
studentCoursesTotal = studentCoursesTotal.sort();

for (let i=0; i<studentCoursesTotal.length; i++){
    if(studentCoursesTotal[i]===studentCoursesTotal[i-1]){
        coursesDuplicates.push(studentCoursesTotal[i]);
    }
}

console.log(coursesDuplicates);