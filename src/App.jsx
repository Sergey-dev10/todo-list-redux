import { Todo } from "./components/Todo";
import { CommonStyles } from "./common/CommonStyles.styles.js";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
      <CommonStyles />
    </>
  );
}

export default App;
