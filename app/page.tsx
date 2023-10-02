'use client'
import React, { useEffect, useState } from 'react';
import MyOverview from './ChvTables/page';
import cookie from 'cookiejs';

const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = Boolean(cookie.get('LoginToken'));
    if (isLoggedIn) {
      // User is logged in, perform the desired navigation
      // For example: navigate to '/'
      window.location.href = '/';
    } else {
      // User is not logged in, perform the desired navigation
      // For example: navigate to '/login'
      window.location.href = '/login';
    }
    setIsUserLoggedIn(isLoggedIn);
  }, []);

  return (
    <main className='bg-white'>
      <div>
        <MyOverview/>
      </div>
    </main>
  );
};

export default Home;