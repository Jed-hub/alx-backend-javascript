interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mike',
  lastName: 'Ross',
  age: 18,
  location: 'New York'
}

const student2: Student = {
  firstName: 'James',
  lastName: 'Ray',
  age: 20,
  location: 'Los Angeles'
}

const studentsList = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cell = document.createElement('td');
  const cellLoc = document.createElement('td');
  cell.textContent = obj.firstName;
  cellLoc.textContent = obj.location;
  row.appendChild(cell);
  row.appendChild(cellLoc);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
