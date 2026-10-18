export interface EmployeeData {
  firstName: string;
  lastName: string;
  department: string;
  // Changing department type to string because it isn't possible to select a different department
  // than what is listed on the select
}