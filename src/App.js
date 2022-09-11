import PageRoutes from "../src/pageroutes/pageroutes";
import PublicRoutes from "../src/pageroutes/publicroutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./features/user";
import { useEffect } from "react";
import { localStorageUrl } from "./constants";
function App() {
  //var isLogged = false;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  useEffect(() => {
    if (localStorage[localStorageUrl]) {
      dispatch(login({ isLogged: true, email: localStorage[localStorageUrl] }));
    }
  }, []);
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {!user.isLogged ? <PublicRoutes /> : <PageRoutes />}
    </>
  );
}

export default App;
