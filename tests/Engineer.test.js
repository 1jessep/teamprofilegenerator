const Engineer = require("../lib/Engineer");

test("Employee Test", () => {
  const engineer = new Engineer("John", "1010", "john@john.com", "fakeUser");
  expect(engineer.github).toBe("fakeUser");
  expect(engineer.getGithub()).toBe("Github: fakeUser");
  expect(engineer.getRole()).toBe("Engineer");
});
