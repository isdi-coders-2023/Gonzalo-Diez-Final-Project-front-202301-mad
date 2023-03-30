import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import { RouterOption } from "../app/app";
import { AppRouter } from "./app.router";

describe("Given the app router component", () => {
  const mockOptions: RouterOption[] = [
    { label: "Access", path: "/access" },
    { label: "Home", path: "/home" },
    { label: "List", path: "/list" },
    { label: "AddAddictionForm", path: "/addictions/:addictionId" },
  ];
  describe("When the router is in Access", () => {
    test("Then, we should navigate to Access", async () => {
      render(
        <Provider store={store}>
          <Router initialEntries={["/"]} initialIndex={0}>
            <AppRouter routerOptions={mockOptions}></AppRouter>
          </Router>
        </Provider>
      );

      const accountButton = await screen.findByRole("button", {
        name: "I HAVE AN ACCOUNT",
      });
      expect(accountButton).toBeInTheDocument();

      const newHereButton = await screen.findByRole("button", {
        name: "I'M NEW HERE",
      });
      expect(newHereButton).toBeInTheDocument();
    });
  });
  describe("When the route is Home", () => {
    test("Then we should navigate to home", async () => {
      render(
        <Provider store={store}>
          <Router initialEntries={["/home"]} initialIndex={0}>
            <AppRouter routerOptions={mockOptions}></AppRouter>
          </Router>
        </Provider>
      );
      const element = await screen.findByText("Let's begin healing");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the route is List", () => {
    test("Then we should navigate to list", async () => {
      render(
        <Provider store={store}>
          <Router initialEntries={["/list"]} initialIndex={0}>
            <AppRouter routerOptions={mockOptions}></AppRouter>
          </Router>
        </Provider>
      );
      const element = await screen.findByText("Addictions");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the addAddiction form is rendered", () => {
    test("Then, we should navegate to addAddictionForm", async () => {
      render(
        <Provider store={store}>
          <Router initialEntries={["/addictions/:123123"]} initialIndex={0}>
            <AppRouter routerOptions={mockOptions}></AppRouter>
          </Router>
        </Provider>
      );
      const element = await screen.findByText("Cause:");
      expect(element).toBeInTheDocument();
    });
  });
});
