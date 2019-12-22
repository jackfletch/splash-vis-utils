export interface Person {
  firstName?: string;
  lastName: string;
}

function greet(person: Person): void {
  console.log("hello " + person?.firstName);
}

export default greet;
