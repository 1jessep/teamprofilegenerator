const Employee = require("../lib/Employee");

test("Employee Test", () => {
  const employee = new Employee("John", "1010", "john@john.com");
  expect(employee.name).toBe("John");
  expect(employee.getName()).toBe("Name: John");
  expect(employee.id).toBe("1010");
  expect(employee.getId()).toBe("ID: 1010");
  expect(employee.email).toBe("john@john.com");
  expect(employee.getEmail()).toBe("Email: john@john.com");
  expect(employee.getRole()).toBe("Employee");
});
