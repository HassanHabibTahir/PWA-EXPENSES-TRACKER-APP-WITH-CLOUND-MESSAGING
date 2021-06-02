import React from 'react';
import Header from './component/Header';
import Balance from './component/Balance';
import IncomeExpensis from './component/incomeExpensis';
import TransacationList from './component/TransactionList';
import AddTransaction from './component/addTransaction';
import { GlobalProvider } from './context/globalContext';
import firebase from './firebase'
import './App.css';


function App() {

  React.useEffect(() => {
    const msg = firebase.messaging();
    Notification.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.log("token", data)
    })
  })
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensis />
        <TransacationList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
// https://www.templatemonsterpreview.com/demo/68570.html?_ga=2.111634560.526072940.1599284927-1032514569.1593608513