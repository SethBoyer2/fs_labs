// I thought it'd be nice to have an exported array of department names 
// cause yeah
// hi

/*
export array of departmentnames.
if we had the ability to add or remove departments,
i would have generated this array dynamically
by using a flatmap to iterate over each department name,
but because we don't have that option and this is a lab,
i figured it'd make more sense and be easier to work with
as a manually defined array
*/

export const departmentNames = 
[
"Administration", 
"Audit", 
"Banking Operations", 
"Communications",
"Corporate Services",
"Facilities",
"Financial Services",
"Human Resources",
"Information Technology",
"It Technician"
] as const