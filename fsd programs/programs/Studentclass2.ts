class StudentInformation {

    readonly studentId: number;
    studentFullName: string;

    constructor(studentId: number, studentFullName: string) {
        this.studentId = studentId;
        this.studentFullName = studentFullName;
    }

    displayStudent(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.studentFullName);
    }
}

let studentInfoObject = new StudentInformation(101, "Rajya Lakshmi");

studentInfoObject.displayStudent();