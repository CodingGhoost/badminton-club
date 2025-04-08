import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
            "token": {
          "colorSuccess": "#52c41a",
          "colorWarning": "#faad14",
          "colorError": "#f5222d",
          "colorPrimary": "#000000",
          "colorInfo": "#000000",
          "colorPrimaryTextHover": "#202020",
          "colorPrimaryHover": "#202020",
          "colorPrimaryBg": "#0000001a",
          "colorPrimaryBgHover": "#919191"
        }
      }}
    >
      <RouterProvider router={router} /> 
    </ConfigProvider>
  </React.StrictMode> 
  
);
