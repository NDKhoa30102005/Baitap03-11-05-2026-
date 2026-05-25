import { Outlet } from 'react-router-dom';
import Header from './components/layout/header';
import axios from './util/axios.customize';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';
import { Spin } from 'antd';

function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const res = await axios.get('/v1/api/account');
        if (res && res.data) {
          setAuth({
            isAuthenticated: true,
            user: {
              email: res.data?.email,
              name: res.data?.name
            }
          })
        }
      } catch (error) {
        console.error('Unable to load account info:', error);
      } finally {
        setAppLoading(false);
      }
    }
    fetchAccount();
  }, [setAuth, setAppLoading])

  return (
    <>
      {appLoading === true ?
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Spin />
        </div>
        :
        <Outlet />
      }
    </>
  )
}

export default App
