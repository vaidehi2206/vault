import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'First_name', lastName: 'Last_name', email: 'Email'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'User'}
            subtext="Empowering Your Financial Journey with VAULT"
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.00}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 235.45}, { currentBalance: 458.75}]}
      />
    </section>
  )
}

export default Home