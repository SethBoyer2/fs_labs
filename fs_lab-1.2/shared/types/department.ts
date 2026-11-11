import type { Employee } from "./employees";

export interface Department {
	name: string;
  employees: Omit<Employee, "department">[]; // my three separate employee types were genuinely frying me.
  // used omit above to allow me to consolidate employee and department into one interface
}
// this is fine, because departments will be assigned at runtime when a getAll request is sent. 
