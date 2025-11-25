import React, { useState } from 'react';
import { View } from 'react-native';

import Login from './src/Login';
import HomePage from './src/HomePage';
import Details from './src/Details';


type Page = 'login' | 'home' | 'details';

const App = () => {

  const [page, setPage] = useState<Page>('login')
  const [userEmail, setUserEmail] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<{ id: number; title: string; image: string } | null>(null);


  const handleLogin = (email: string) => {
    setUserEmail(email);
    setPage('home');
  };

  const handleOpenDetails = (item: { id: number; title: string; image: string }) => {
    setSelectedItem(item);
    setPage('details');
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
    setPage('home');
  };

  const handleLogout = () => {
    setUserEmail('');
    setSelectedItem(null);
    setPage('login');
  };

  return (
  <>
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    
    {page === 'login' && (
      <Login onLogin={handleLogin} />
    )}

    {page === 'home' && (
      <HomePage
        onLogin={handleOpenDetails}
        onLogout={handleLogout}
      />
    )}

    {page === 'details' && selectedItem && (
      <Details
        item={selectedItem}
        onClose={handleCloseDetails}
      />
    )}
    </View>
  </>
);

}


export default App