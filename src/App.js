import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { login, logout } from "./store/user";
import { Field, Form, Formik } from "formik";

export default function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  if (user) {
    return (
      <div>
        Hi, {user.username}!
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" />
            <Field type="text" name="password" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
