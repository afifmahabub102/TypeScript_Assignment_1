function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}





function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    if ( input === true ) return "Active" ;
    else return "inactive" ;
  }
}






function formatCoordinate(coordinate: readonly [number, number, string]): string {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}





function concatenateArrays<T>(...arrays: T[][]): T[] {
  let MixedArray: T[] = [];
  for (const arr of arrays) {
    MixedArray = MixedArray.concat(arr);
  }
  return MixedArray;
}







interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(c => c.isPublished && c.students >= minStudents);
}
const courses = [
  { title: "TypeScript", students: 220, isPublished: true },
  { title: "Ai/Ml Engineering", students: 300, isPublished: false },
  { title: "Computer Networking", students: 25, isPublished: true },
  { title: "Video Editing", students: 100, isPublished: true }
];






function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}
const users = [
  { id: 1, name: "Sazid", role: "Admin" },
  { id: 2, name: "Afif", role: "Editor" },
  { id: 3, name: "Farha", role: "Subscriber" }
];






 class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return "Employee: " + this.name + ", Base Salary: " + this.baseSalary;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return "Manager of " + this.department + ": " + this.name;
  }
}
const manager = new Manager("Rafid", 80000, "Engineering");






async function validateAgeAsync(age: number):Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}
export {};
await validateAgeAsync(20);
await validateAgeAsync(15);
