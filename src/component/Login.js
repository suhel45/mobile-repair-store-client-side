/** @format */
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./UserContext";
import UseTitle from "./Hook/UseTitle";

const Login = () => {
  UseTitle('Login')
  const { signIn, userLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    userLogin()
      .then((result) => {
        const user = result.user;
        const currentUsr = {
          email: user.email,
        };

        fetch("https://mobile-repair-server-side-suhel45.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUsr),
        })
          .then((res) => res.json())
          .then((data) =>{
            localStorage.setItem('secret-token',data.token);
          });
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="shadow p-3 mb-5 bg-white rounded container mt-5 text-dark">
      <h4 className="text-center">Please Login!</h4>
      <ListGroup className="container w-50 mt-3">
        <ListGroup.Item
          className=" text-primary mb-3"
          action
          onClick={handleGoogle}>
          <FaGoogle></FaGoogle> Continue With Google
        </ListGroup.Item>
        <ListGroup.Item className="text-primary mb-3" action>
          <FaGithub></FaGithub> Continue With Github
        </ListGroup.Item>
      </ListGroup>
      <p className="text-center">---------or----------</p>
      <Form onSubmit={handleLoginSubmit} className="container w-50">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="text-center">
        <span>
          <small>
            Do not have an account please <Link to="/register">Register</Link>{" "}
          </small>
        </span>
      </div>
    </div>
  );
};

export default Login;
