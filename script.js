const Departments = [
  {
    name: "Administration",
    employees: [
      { firstName: "Zoë", lastName: "Robins" },
      { firstName: "Madeleine", lastName: "Madden" },
    ],
  },
  {
    name: "Audit",
    employees: [
      { firstName: "Josha", lastName: "Sadowski" },
      { firstName: "Kate", lastName: "Fleetwood" },
    ],
  },
  {
    name: "Banking Operations",
    employees: [
      { firstName: "Priyanka", lastName: "Bose" },
      { firstName: "Hammed", lastName: "Animashaun" },
      { firstName: "Alvaro", lastName: "Morte" },
      { firstName: "Taylor", lastName: "Napier" },
      { firstName: "Alan", lastName: "Simmonds" },
    ],
  },
  {
    name: "Communications",
    employees: [
      { firstName: "Gil", lastName: "Cardinal" },
      { firstName: "Richard J.", lastName: "Lewis" },
    ],
  },
  {
    name: "corporate services",
    employees: [
      { firstName: "Randy", lastName: "Bradshaw" },
      { firstName: "Tracy", lastName: "Cook" },
      { firstName: "Lubomir", lastName: "Myktiuk" },
    ],
  },
  {
    name: "facilities",
    employees: [
      { firstName: "Dakota", lastName: "House" },
      { firstName: "Lori Lea", lastName: "Okemah" },
      { firstName: "Renae", lastName: "Morrisseau" },
      { firstName: "Rick", lastName: "Belcourt" },
    ],
  },
  {
    name: "financial services",
    employees: [
      { firstName: "Selina", lastName: "Hanusa" },
      { firstName: "Buffy", lastName: "Gaudry" },
      { firstName: "Shaneen Ann", lastName: "Fox" },
      { firstName: "Allan", lastName: "Little" },
      { firstName: "Danny", lastName: "Rabbit" },
    ],
  },
  {
    name: "human resources",
    employees: [
      { firstName: "Jesse Ed", lastName: "Azure" },
      { firstName: "Stacy", lastName: "Da Silva" },
      { firstName: "Vladimir", lastName: "Valenta" },
      { firstName: "Samone", lastName: "Sayeses-Whitney" },
      { firstName: "Paul", lastName: "Coeur" },
    ],
  },
  {
    name: "information technology",
    employees: [
      { firstName: "Graham", lastName: "Greene" },
      { firstName: "Sandika", lastName: "Evergreen" },
      { firstName: "Jennifer", lastName: "Rodriguez" },
    ],
  },
  {
    name: "IT technician",
    employees: [
      { firstName: "Aiyana", lastName: "LittleBear" },
      { firstName: "Inara", lastName: "Thunderbird" },
      { firstName: "Kaya", lastName: "Runningbrook" },
      { firstName: "Elara", lastName: "Firehawk" },
      { firstName: "Siona", lastName: "Moonflower" },
      { firstName: "Kaiyu", lastName: "Greywolf" },
      { firstName: "Ayawamat", lastName: "Nightwind" },
      { firstName: "Tala", lastName: "Braveheart" },
      { firstName: "Iniko", lastName: "Stonebear" },
      { firstName: "Onata", lastName: "Redhawk" },
    ],
  },
];

function renderFooter() {
  const copyright = document.createElement("p");
  const currentYear = new Date().getFullYear();
  const footer = document.getElementById("footer");
  copyright.textContent = `Copyright Pixell River Financial, ${currentYear}`;
  footer.appendChild(copyright);
}

function renderLists() {
  const list = document.getElementById("departmentList");

  Departments.forEach((department) => {
    const employeeList = document.createElement("ul");

    const departmentHeader = document.createElement("h2");
    departmentHeader.textContent = department.name;
    list.appendChild(departmentHeader);
    list.appendChild(employeeList);

    department.employees.forEach((employee) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${employee.firstName} ${employee.lastName}`;
      employeeList.appendChild(listItem);
    });
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  renderFooter();
  renderLists();
});

/*
separated into functions because JS (At least when I use it,) IS SO UGLY.
I can write very nice looking LUA, Python, and even C,
but when it comes to formatting JS it looks like you're
watching an episode of extreme hoarders on TLC
*/
