import type { EmployeeData } from "../types/employees";
import type { Department } from "../components/DepartmentList/Data";

  export function createEmployee(employee: EmployeeData, Departments: Department[]): Department[] {
    return Departments.map((department) => {
        if (department.name === employee.department) {
            return {
                ...department,
                employees:[...department.employees, employee]
            }
        }
        return department
    })
  }


//       updateDepartments((departments) => {
//       return departments.map((department) => {
//         if (department.name === employee.department) {
//           return {
//             ...department,
//             employees: [...department.employees, employee],
//           };
//         }
//         return department;
//       });
//     });
//   }