import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const mockuser = { name: "Bob" };
    const mockresp = { data: mockuser };
    axios.get.mockResolvedValue(mockresp);
    await expect(getUsers()).resolves.toEqual({ name: "Bob" });
  });
});
