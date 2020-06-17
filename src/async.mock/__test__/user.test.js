import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUsername = "username";
    const mockPassword = "password";
    const mockresp = { mockUsername, mockPassword };
    verifyUsername.mockImplementation(() => true);
    axios.post.mockImplementation(() => Promise.resolve({ data: mockresp }));

    const result = register(mockUsername, mockPassword);
    await expect(result).resolves.toEqual({
      mockPassword: "password",
      mockUsername: "username",
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const mockUsername = "username";
    const mockPassword = "password";

    const mockresp = { mockUsername, mockPassword };
    verifyUsername.mockImplementation(() => false);
    axios.post.mockImplementation(() => Promise.resolve({ data: mockresp }));
    const result = register(mockUsername, mockPassword);

    await expect(result).rejects.toThrow("wrong username or password");
  });
});
