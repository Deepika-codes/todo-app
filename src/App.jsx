import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Components/style.css";
import TodoList from "./components/todoList":
const App = () => {
  return (
    <div className="container">
      <TodoList />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default App;
