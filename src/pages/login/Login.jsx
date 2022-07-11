import React from 'react';
import useLogin from '../../hooks/use-login';

function Login() {
  const [user, setUser] = React.useState({
    username: '',
    password: '',
  });
  const { authLogin } = useLogin();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex my-40">
      <form
        className=" flex-1 flex flex-col items-center"
        onSubmit={(e) => authLogin(e, user.username, user.password)}
      >
        <img
          src="https://static.wixstatic.com/media/b51702_2e867afbfd6f4f4b993edb7078c9af35~mv2.png/v1/crop/x_0,y_171,w_2500,h_965/fill/w_158,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/timelineArtboard%201_3xasd.png"
          alt="logo"
        />
        <br />
        <h1 className="text-center text-3xl">
          <b>Login</b>
        </h1>

        <input
          type="text"
          name="username"
          placeholder="username"
          className="border-2 border-gray-300 rounded-md p-2 my-2 w-1/3"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={user.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          className="border-2 border-gray-300 rounded-md p-2 mb-2 w-1/3"
          id="exampleInputPassword1"
          value={user.password}
          onChange={handleChange}
        />

        <button 
          type="submit"
          value="Login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-1/3 rounded"
          >
          Submit
        </button> 
      </form>
    </div>
  );
}

export default Login;
