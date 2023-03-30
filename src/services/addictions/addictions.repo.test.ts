import { AddictionsRepo } from "./addictions.repo";

describe("Given the Addictions repo", () => {
  let repo: AddictionsRepo;

  beforeEach(() => {
    repo = new AddictionsRepo();
  });

  describe("When we use the load method", () => {
    test("Then, if there is no errors it should return the data", async () => {
      const mock = { addiction: 1 };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mock),
      });

      const result = await repo.load();
      expect(result).toEqual(mock);
    });
    test("Then, if there is an error in the fetch it should throw an error", async () => {
      global.fetch = jest
        .fn()
        .mockResolvedValue({ ok: false, statusText: "Test error" });
      const result = repo.load();
      await expect(result).rejects.toThrow();
    });
  });
});
