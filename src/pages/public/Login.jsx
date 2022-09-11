import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../features/user";
import { localStorageUrl } from "../../constants";

const Login = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  function loginUser(data) {
    if (data.email === "") {
      toast.error("Email is Required!");
      return;
    }
    if (data.password === "") {
      toast.error("Password is Required!");
      return;
    }
    if (data.email === "usman@gmail.com" && data.password === "111") {
      localStorage[localStorageUrl] = data.email;
      dispatch(login({ isLogged: true, email: localStorage[localStorageUrl] }));
      navigate("/supporters");
    } else {
      toast.error("Invalid User!");
    }
  }
  return (
    <div style={{ textAlign: "center", marginTop: "5%" }} class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner ">
          <div class="card">
            <div class="card-body">
              <h4 class="mb-2">Welcome to Yari Portal! 👋</h4>
              <p class="mb-4">Please sign-in to your account</p>

              <form onSubmit={handleSubmit(loginUser)}>
                <div class="mb-3">
                  <label htmlFor="email" class="form-label">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    required
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" htmlFor="password">
                      Password
                    </label>
                    <a href="auth-forgot-password-basic.html">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div class="input-group input-group-merge">
                    <input
                      {...register("password")}
                      required
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <span class="input-group-text cursor-pointer">
                      <i class="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label class="form-check-label" for="remember-me">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-grid w-100" type="submit">
                    Sign in
                  </button>
                </div>
              </form>

              {/* <p class="text-center">
                <span>New on our platform?</span>
                <a href="auth-register-basic.html">
                  <span>Create an account</span>
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
