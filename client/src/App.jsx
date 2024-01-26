// import Outlet component
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import AppContextProvider from './utils/AppContextProvider';

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

// App component using Outlet component to route and render specific page components
function App() {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <div className='background-container'>
          <Header />
          <SearchBar />
          <Outlet />
          {/* <Footer />  */}
        </div>
      </AppContextProvider>
    </ApolloProvider>
  )
}

export default App;