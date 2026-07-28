class EmployeeDetails {

    public employeeName: string;
    private employeeSalary: number;
    protected employeeDepartment: string;

    constructor(employeeName: string, employeeSalary: number, employeeDepartment: string) {
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
        this.employeeDepartment = employeeDepartment;
    }

    public displayEmployee(): void {
        console.log("Employee Name:", this.employeeName);
        console.log("Salary:", this.employeeSalary);
        console.log("Department:", this.employeeDepartment);
    }
}

class ManagerDetails extends EmployeeDetails {

    showDepartment(): void {
        console.log("Department:", this.employeeDepartment);
    }
}

let employeeObject = new ManagerDetails("Rahul", 50000, "IT");

console.log(employeeObject.employeeName);
employeeObject.displayEmployee();
employeeObject.showDepartment();