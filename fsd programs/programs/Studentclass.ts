class StudentDetails {
    studentName: string;
    studentAge: number;
    studentCourse: string;

    constructor(studentName: string, studentAge: number, studentCourse: string) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentCourse = studentCourse;
    }

    displayDetails(): void {
        console.log("Student Name:", this.studentName);
        console.log("Age:", this.studentAge);
        console.log("Course:", this.studentCourse);
    }
}

let studentObject = new StudentDetails("Rajya Lakshmi", 20, "B.Tech CSE");
studentObject.displayDetails();