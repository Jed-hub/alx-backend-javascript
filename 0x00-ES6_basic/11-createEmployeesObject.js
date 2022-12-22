export default function createEmployeesObject(departmentName, employees) {
  return { [departementName]: [...employees] };
}
