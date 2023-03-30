import { User, userResults } from "../../models/user";
import { UserRepo } from "./user.repo";

describe("Given the UsersRepo", () => {
  let repo: UserRepo;
  beforeEach(() => {
    repo = new UserRepo();
  });
  describe("When we call the create function", () => {
    test("Then, it should return ok as the request with the data was", async () => {
      const mockValue = {};

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockValue),
      });
      const result = await repo.create({}, "/random");
      expect(result).toEqual(mockValue);
    });
    test("Then, if the resp its not ok, it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("xd");
      const result = repo.create({ id: "1" }, "/random");
      await expect(result).rejects.toThrow();
    });
  });
  describe("When we call the update function", () => {
    test("Then, it should return ok as the request with the data", async () => {
      const mock = { id: "1" };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mock),
      });
      const result = await repo.update({ id: "1" }, "JustATest", "WoWTest");
      expect(result).toEqual(mock);
    });
    test("Then, if the resp its not ok, it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("Test!");
      const result = repo.update({ id: "1" }, "JustATest", "WoWTest");
      await expect(result).rejects.toThrow();
    });
  });
  describe("When we call the addAddiction function", () => {
    test("Then, it should return userResults data when called with valid parameters and token", async () => {
      const mock = {
        addictionId: "1",
        timeConsuming: new Date(),
        cause: "Test Cause",
      };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mock),
      });

      const result = await repo.addAddiction(
        "1",
        new Date(),
        "Test Cause",
        "token"
      );

      expect(result).toEqual(mock);
    });
    test("Then, if the response is not ok, it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        statusText: "Error",
      });

      await expect(
        repo.addAddiction("2", new Date(), "Broken Input", "token")
      ).rejects.toThrow(Error);
    });
  });
  describe("When we use the getUser method", () => {
    const userMock = {} as userResults;
    const mockToken = "";
    test("Then, if there is no errors it should return a user", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(userMock),
      });

      const result = await repo.getUser(mockToken);
      expect(result).toEqual(userMock);
    });
    test("Then, if there is any error it should return an error", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue("test"),
      });

      const result = repo.getUser(mockToken);

      await expect(result).rejects.toThrow();
    });
  });
});
