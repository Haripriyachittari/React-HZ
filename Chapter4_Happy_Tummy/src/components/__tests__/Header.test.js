import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { UserContextProvider } from "../../utils/UserContext";
import { StaticRouter } from "react-router-dom/server";

test("Header rendered", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <UserContextProvider>
          <Header />
        </UserContextProvider>
      </Provider>
    </StaticRouter>
  );
});
