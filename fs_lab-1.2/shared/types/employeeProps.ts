import type { Department } from "./department";

export type EmployeesProps = {
  departments: Department[];
  updateDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
};

