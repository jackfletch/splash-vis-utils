import {greet, Person} from "../src";

describe("greet", () => {
  it("Should correctly greet person with first name", () => {
    const person: Person = {
      firstName: "Jon",
      lastName: "Smith",
    };
    const greeting = greet(person);
    expect(greeting).toBe("hello Jon");
  });

  it("Should correctly greet person without first name", () => {
    const person: Person = {
      lastName: "Smith",
    };
    const greeting = greet(person);
    expect(greeting).toBe("hello Smith");
  });
});
