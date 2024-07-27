
import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lobby from './Lobby';
import Home from './Home';
import PostList from './PostList';
import MemberLogin from './Login/MemberLogin'
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
{
  path:"/",
  element: <Home></Home>,
  children: [
    {
      index:true,
      element:<Lobby></Lobby>
    },
    { path:"login",element:<MemberLogin></MemberLogin>},
    { path: "post", element: <PostList /> },
  ],
},
]);

function App(props) {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;