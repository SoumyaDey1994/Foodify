import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../Store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve({ name: "TEST_USERNAME" });
    },
  });
});

describe("Test Header Component", () => {
  it("should load app logo", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const logo = screen.getByAltText("app-logo");
    expect(logo).toBeInTheDocument();
  });

  it("should indicate online/offline status accordingly", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    fireEvent(window, new Event("offline"));
    expect(screen.getByTestId("app-offline")).toBeInTheDocument();

    fireEvent(window, new Event("online"));
    expect(screen.getByTestId("app-online")).toBeInTheDocument();
  });

  it("should have Cart tab", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartTab = screen.getByText(/Cart/);
    expect(cartTab).toBeInTheDocument();
  });

  it("should have a Sign-in button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const signInButton = screen.getByRole("button", { name: "Sign In" });
    expect(signInButton).toBeInTheDocument();
  });

  it("should toggle button text on click on sign-in button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
    });

    const signInButton = screen.getByRole("button", { name: "Sign In" });
    fireEvent.click(signInButton);

    await waitFor(() => {
      const signOutButton = screen.getByRole("button", {
        name: /TEST_USERNAME/,
      });
      expect(signOutButton).toBeInTheDocument();
      fireEvent.click(signOutButton);
      expect(signInButton).toBeInTheDocument();
    });
  });
});
