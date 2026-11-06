import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const validateErrors = {};
    if (!userName.trim()) {
      validateErrors.userName = "Username is empty";
    }
    if (password.length < 8) {
      validateErrors.password = "Password must contain at least 8 characters";
    }
    return validateErrors;
  }
  function validateUserName(userName) {
    let error = null;
    if (!userName.trim()) {
      error = "Username is empty";
    }
    return error;
  }
  function validatePassword(password) {
    let error = null;
    if (password.length < 8) {
      error = "Password must contain at least 8 characters";
    }
    return error;
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userName: userName,
      password: password,
    };
    console.log("FormDetails", formData);
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      navigate("/users");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="UserName"
          placeholder="Enter UserName"
          value={userName}
          onBlur={() => {
            const uNameError = validateUserName(userName);
            setErrors((previousErrors) => {
              const updatedErrors = { ...previousErrors };
              if (uNameError) {
                updatedErrors.userName = uNameError;
              } else {
                delete updatedErrors.userName;
              }
              return updatedErrors;
            });
          }}
          onChange={(e) => {
            const newValue = e.target.value;
            setUserName(newValue);

            if (userName.trim() || errors.userName) {
              const uNameError = validateUserName(newValue);
              setErrors((previousErrors) => {
                const updatedErrors = { ...previousErrors };
                if (uNameError) {
                  updatedErrors.userName = uNameError;
                } else {
                  delete updatedErrors.userName;
                }
                return updatedErrors;
              });
            }
          }}
        />
        {errors.userName && <p>{errors.userName}</p>}
        <input
          type="password"
          aria-label="Password"
          placeholder="Enter Password"
          value={password}
          onBlur={() => {
            const passError = validatePassword(password);
            setErrors((previousErrors) => {
              const updatedErrors = { ...previousErrors };
              if (passError) {
                updatedErrors.password = passError;
              } else {
                delete updatedErrors.password;
              }
              return updatedErrors;
            });
          }}
          onChange={(e) => {
            const newValue = e.target.value;
            setPassword(newValue);

            if (password.trim() || errors.password) {
              const passError = validatePassword(newValue);
              setErrors((previousErrors) => {
                const updatedErrors = { ...previousErrors };
                if (passError) {
                  updatedErrors.password = passError;
                } else {
                  delete updatedErrors.password;
                }
                return updatedErrors;
              });
            }
          }}
        />
        {errors.password && <p>{errors.password}</p>}
        <button aria-label="Submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
