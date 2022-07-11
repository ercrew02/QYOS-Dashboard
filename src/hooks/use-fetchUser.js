// import { useContext } from 'react';
// import { ACTIONS, MyContext } from '../context/context';

// function useFetchUser() {
//   const { dispatch } = useContext(MyContext);

//   const fetchUser = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await response.json();
//     dispatch({ type: ACTIONS.GET_USER, payload: data });
//     // dispatch({ type: ACTIONS.GET_USER, payload: data });
//   };

//   // const fetchUser2 = async () => {
//   //   const url = 'https://jsonplaceholder.typicode.com/users';
//   //   fetch(url, {
//   //     method: 'GET',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       console.log(data);
//   //     });
//   // };

//   return { fetchUser };
// }

// export default useFetchUser;
