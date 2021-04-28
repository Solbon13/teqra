import { Layout, Skeleton } from 'antd';
import React from 'react';
import { Provider } from 'react-redux';
// import { Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';
import MyHeader from './components/MyHeader/MyHeader';
import Main from './page/Main';
import Payment from './page/Payment';
import Programm from './page/Programm';
import store from './redux/reduxStore';

const { Content } = Layout; 

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <MyHeader />
          <Content style={{ padding: '0 50px' }}>
            <React.Suspense fallback={<Skeleton active />}>
              {/* <Route path='/' component={<Main/>} exact /> */}
              <Route path='/' render={() => <Main />} exact /> 
              <Route path='/payment' render={() => <Payment />} /> 
              <Route path='/programm' render={() => <Programm />} /> 
            </React.Suspense>
          </Content>
        </Layout>
      </Provider>
    </BrowserRouter> 
  );
}

export default App;
