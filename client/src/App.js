import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/Login';
import Donate from './Pages/donate';
import Favedogs from './Pages/favedogs';
import Signup from './Pages/Signup';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
//import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
return (
    <ApolloProvider client={client}>
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/favedogs' element={<Favedogs/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/donate' element={<Donate/>} />
        
    </Routes>
    </Router>
    </ApolloProvider>
);
}
  
export default App;













