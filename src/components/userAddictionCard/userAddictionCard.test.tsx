/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { UserAddictionCard } from "./userAddictionCard";

describe("Given the user addiction Card component", () => {
  beforeEach(() => {
    const mockUserAddiction = {
      addictionId: {
        id: "abc123",
        name: "Test Addiction",
        img: "",
        description: "This is a description",
      },
      cause: "Testing purposes",
      timeConsuming: new Date(),
    };

    render(<UserAddictionCard UserAddiction={mockUserAddiction} />);
  });

  describe("When we render the component", () => {
    test("Then, things should be in the document", () => {
      const img = screen.getByRole("img");
      expect(img).toBeInTheDocument();

      const name = screen.getByText(/test addiction/i);
      expect(name).toBeInTheDocument();

      // similarly you can add tests for other spans like description,
      // cause and time consuming here
    });
  });
});
