import Router from "./router/Routes";
import { Provider } from "react-redux";
import store from "./store/store";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}
