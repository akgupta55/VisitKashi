import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./AuthStyles.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <>
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
          <div>
            If you have not an account{" "}
            <span>
              <Link to="/register" onClick={handleClick}>
                Register here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
