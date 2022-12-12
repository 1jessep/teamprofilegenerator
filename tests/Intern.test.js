const Intern = require("../lib/Intern");

test("Employee Test", () => {
  const intern = new Intern("John", "1010", "john@john.com", "fakeSchool");
  expect(intern.school).toBe("fakeSchool");
  expect(intern.getSchool()).toBe("School: fakeSchool");
  expect(intern.getRole()).toBe("Intern");
});
