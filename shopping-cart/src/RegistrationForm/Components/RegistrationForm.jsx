import { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      console.log("Submitted", formData);
      setErrors({});
    }
  };
  const validateForm = () => {
    const validationErrors = {};
    const emailError = validateEmail(email);
    if (!firstName.trim()) {
      validationErrors.firstName = "FirstName is empty";
    }
    if (!lastName.trim()) {
      validationErrors.lastName = "LastName is empty";
    }
    if (emailError) {
      validationErrors.email = emailError;
    }
    if (password.trim().length < 8) {
      validationErrors.password = "Password must contain 8 characters";
    }
    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = "confirmPassword is empty";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Password doesn't match";
    }
    return validationErrors;
  };
  const validateFirstName = (firstName) => {
    let error = null;
    if (!firstName.trim()) {
      error = "firstName is empty";
    }
    return error;
  };
  const validateLastName = (lastName) => {
    let error = null;
    if (!lastName.trim()) {
      error = "lastName is empty";
    }
    return error;
  };
  const validateEmail = (email) => {
    // Check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = null;
    if (!emailRegex.test(email)) {
      error = "Invalid email address";
    }
    return error;
  };
  const validatePassword = (password) => {
    let error = null;
    if (password.trim().length < 8) {
      error = "Password must contain at least 8 characters";
    }
    return error;
  };
  const validateConfirmPassword = (password, confirmPassword) => {
    let error = null;
    if (!confirmPassword.trim()) {
      error = "confirmPassword is empty";
    } else if (password !== confirmPassword) {
      error = "confirmPassword not matching";
    }
    return error;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="FirstName"
          placeholder="Enter Fname"
          value={firstName}
          onBlur={() => {
            const fNameError = validateFirstName(firstName);
            setErrors((previousErrors) => {
              const updatedErrors = { ...previousErrors };

              if (fNameError) {
                updatedErrors.firstName = fNameError;
              } else {
                delete updatedErrors.firstName;
              }
              return updatedErrors;
            });
          }}
          onChange={(e) => {
            const newValue = e.target.value;
            setFirstName(newValue);

            if (newValue.trim() || errors.firstName) {
              const fNameError = validateFirstName(newValue);
              setErrors((previousErrors) => {
                const updatedErrors = { ...previousErrors };

                if (fNameError) {
                  updatedErrors.firstName = fNameError;
                } else {
                  delete updatedErrors.firstName;
                }
                return updatedErrors;
              });
            }
          }}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
        <input
          type="text"
          aria-label="LastName"
          placeholder="Enter Lname"
          value={lastName}
          onBlur={() => {
            const lNameError = validateLastName(lastName);
            setErrors((previousErrors) => {
              const updatedErrors = { ...previousErrors };

              if (lNameError) {
                updatedErrors.lastName = lNameError;
              } else {
                delete updatedErrors.lastName;
              }
              return updatedErrors;
            });
          }}
          onChange={(e) => {
            const newValue = e.target.value;
            setLastName(newValue);

            if (newValue.trim() || errors.lastName) {
              const lNameError = validateLastName(newValue);
              setErrors((previousErrors) => {
                const updatedErrors = { ...previousErrors };

                if (lNameError) {
                  updatedErrors.lastName = lNameError;
                } else {
                  delete updatedErrors.lastName;
                }
                return updatedErrors;
              });
            }
          }}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        <input
          type="email"
          aria-label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            const newValue = e.target.value;

            setEmail(newValue);
            if (newValue.trim() || errors.email) {
              const emailError = validateEmail(newValue);
              setErrors((previousErrors) => {
                const updatedErrors = { ...previousErrors };
                if (emailError) {
                  updatedErrors.email = emailError;
                } else {
                  delete updatedErrors.email;
                }
                return updatedErrors;
              });
            }
          }}
          onBlur={() => {
            const emailError = validateEmail(email);
            setErrors((previousErrors) => {
              const updatedErrors = { ...previousErrors };

              if (emailError) {
                updatedErrors.email = emailError;
              } else {
                delete updatedErrors.email;
              }
              return updatedErrors;
            });
          }}
        />
        {errors.email && <p>{errors.email}</p>}
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
            if (newValue.trim() || errors.password) {
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
            if (confirmPassword.trim() || errors.confirmPassword) {
              const confirmPassError = validateConfirmPassword(
                newValue,
                confirmPassword,
              );

              setErrors((previousErrors) => {
                const updatedErrors = { ...previousErrors };
                if (confirmPassError) {
                  updatedErrors.confirmPassword = confirmPassError;
                } else {
                  delete updatedErrors.confirmPassword;
                }
                return updatedErrors;
              });
            }
          }}
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          type="password"
          aria-label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onBlur={() => {
            const confirmPassError = validateConfirmPassword(
              password,
              confirmPassword,
            );
            setErrors((previousErrors) => {
              const updatedErrors = { ...previousErrors };

              if (confirmPassError) {
                updatedErrors.confirmPassword = confirmPassError;
              } else {
                delete updatedErrors.confirmPassword;
              }
              return updatedErrors;
            });
          }}
          onChange={(e) => {
            const newValue = e.target.value;
            setConfirmPassword(newValue);
            if (newValue.trim() || errors.confirmPassword) {
              const confirmPassError = validateConfirmPassword(
                password,
                newValue,
              );
              setErrors((previousErrors) => {
                const updatedErrors = { ...previousErrors };
                if (confirmPassError) {
                  updatedErrors.confirmPassword = confirmPassError;
                } else {
                  delete updatedErrors.confirmPassword;
                }
                return updatedErrors;
              });
            }
          }}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button aria-label="Register" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default RegistrationForm;
