export interface Person {
  firstName?: string;
  lastName: string;
}

function greet(person: Person): string {
  return `hello ${person.firstName ?? person.lastName}`;
}

export default greet;
