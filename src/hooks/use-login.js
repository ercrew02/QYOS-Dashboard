import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, MyContext } from "../context/context";

function useLogin() {
  const { dispatch } = useContext(MyContext);
  const navigate = useNavigate();

  const authLogin = async (e, username, password) => {
    e.preventDefault();
    const response = await fetch(
      `https://stormy-garden-64397.herokuapp.com/login?username=${username}&password=${password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch({
      type: ACTIONS.LOGIN,
      payload: {
        username: data.username,
        token: data.token,
      },
    });

    navigate("/");
  };

  return { authLogin };
}

export default useLogin;
