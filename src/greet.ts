export interface Person {
  firstName?: string;
  lastName: string;
}

function greet(person: Person): void {
  // eslint-disable-next-line no-console
  console.log(`hello ${person?.firstName}`);
}

export default greet;
