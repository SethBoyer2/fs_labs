import type {Department} from "../components/DepartmentList/Data"

export type EmployeesProps = {
  departments: Department[];
  updateDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
};

