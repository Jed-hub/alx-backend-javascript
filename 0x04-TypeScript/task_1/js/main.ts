// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Creating a teacher
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Creating a director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Returns the first letter of the firstName and the full lastName
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

// Constructor interface
interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}

// Creating class
class StudentClass implements classInterfaace {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Creating instance of StudentClass
const studentClass: StudentClass = new StudentClass('Mike', 'Ross');

console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
