const Manager = require("../lib/Manager");

test("Employee Test", () => {
  const manager = new Manager("John", "1010", "john@john.com", "fakeOffice");
  expect(manager.office).toBe("fakeOffice");
  expect(manager.getOffice()).toBe("Office Number: fakeOffice");
  expect(manager.getRole()).toBe("Manager");
});
