import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useVideosAndCategory } from "../../../context/videos-context";

function Signup() {
  const [userSignupData, setUserSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password");

  const navigate = useNavigate();
  const { theme } = useVideosAndCategory();

  function handleSignup() {
    const userData = {
      email: userSignupData.email,
      password: userSignupData.password,
    };

    (async () => {
      try {
        const response = await axios.post("/api/auth/signup", userData);
        localStorage.setItem("token", response.data.encodedToken);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <>
      <section className="login_form_container d-flex">
        <div
          className={`card-basic login_form ${
            theme == "dark" && "dark-theme-light-bg-clr dark-theme-font-clr"
          }`}
        >
          <h2 className="t-align-center mt-2 mb-2">Signup</h2>

          <div className="inp-container mb-1">
            <label
              className={`inp-label d-block inp-label-required login_inp_label_resize ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
            >
              First name
            </label>
            <input
              className={`inp login_inp_resize ${
                theme == "dark" &&
                "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
              }`}
              id="inp-email"
              placeholder="Enter your first name"
              value={userSignupData.firstName}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  firstName: e.target.value,
                })
              }
            />
          </div>

          <div className="inp-container mb-1">
            <label
              className={`inp-label d-block inp-label-required login_inp_label_resize ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
            >
              Last name
            </label>
            <input
              className={`inp login_inp_resize ${
                theme == "dark" &&
                "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
              }`}
              id="inp-email"
              placeholder="Enter your last name"
              value={userSignupData.lastName}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  lastName: e.target.value,
                })
              }
            />
          </div>

          <div className="inp-container mb-1">
            <label
              className={`inp-label d-block inp-label-required login_inp_label_resize ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
            >
              Email address
            </label>
            <input
              className={`inp login_inp_resize ${
                theme == "dark" &&
                "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
              }`}
              id="inp-email"
              placeholder="Enter your email address"
              value={userSignupData.email}
              onChange={(e) =>
                setUserSignupData({ ...userSignupData, email: e.target.value })
              }
            />

            <div className="err-msg-container d-none">
              <span>
                <i className="fa fa-exclamation-circle err-icon"></i>Enter your
                email address!
              </span>
            </div>
          </div>

          <div className="inp-container mb-1 p-relative">
            <label
              className={`inp-label d-block inp-label-required login_inp_label_resize ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
            >
              Password
            </label>
            <input
              type={passwordInputType}
              className={`inp login_inp_resize ${
                theme == "dark" &&
                "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
              }`}
              id="inp-password"
              placeholder="Enter password"
              value={userSignupData.password}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  password: e.target.value,
                })
              }
            />

            {passwordInputType == "password" ? (
              <i
                className="fa-solid fa-eye login-inp-icon"
                onClick={() => setPasswordInputType("text")}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash login-inp-icon"
                onClick={() => setPasswordInputType("password")}
              ></i>
            )}

            <div className="err-msg-container d-none">
              <span>
                <i className="fa fa-exclamation-circle err-icon"></i>Enter your
                password!
              </span>
            </div>
          </div>

          <div className="inp-container mb-1">
            <label
              className={`inp-label d-block inp-label-required login_inp_label_resize ${
                theme == "dark" && "dark-theme-font-clr"
              }`}
            >
              Confirm Password
            </label>
            <input
              type={confirmPasswordInputType}
              className={`inp login_inp_resize ${
                theme == "dark" &&
                "dark-theme-font-clr dark-theme-light-bg-clr dark-theme-border-clr"
              }`}
              id="inp-email"
              placeholder="Enter your password again"
              value={userSignupData.confirmPassword}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  confirmPassword: e.target.value,
                })
              }
            />
            {confirmPasswordInputType == "password" ? (
              <i
                className="fa-solid fa-eye login-inp-icon"
                onClick={() => setConfirmPasswordInputType("text")}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash login-inp-icon"
                onClick={() => setConfirmPasswordInputType("password")}
              ></i>
            )}
          </div>

          <div className="inp-container mb-1">
            <div className="d-flex login_checkbox_inp_container">
              <input type="checkbox" id="checkbox-termsPolicy" />
              <label
                className={`inp-label inp-label-required font-small ${
                  theme == "dark" && "dark-theme-font-clr"
                }`}
              >
                I accept all Terms & Conditions
              </label>
            </div>

            <div className="err-msg-container d-none">
              <span>
                <i className="fa fa-exclamation-circle err-icon"></i>Accept our
                terms & policy before going forward!
              </span>
            </div>
          </div>

          <div className="inp-container ml-1 mb-1">
            <button
              className="btn login_custom_btn pri-cta-light-bg-clr"
              type="button"
              onClick={() => handleSignup()}
            >
              Signup
            </button>
          </div>

          <div className="inp-container t-align-center mb-2">
            <NavLink to="/login">
              <small
                className={`create_acc_link ${
                  theme == "dark" && "dark-theme-font-clr"
                }`}
              >
                Already have an account
              </small>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
