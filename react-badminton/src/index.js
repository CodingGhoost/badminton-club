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
          "colorPrimaryTextHover": "#101828",
          "colorPrimaryHover": "#101828",
          "colorPrimaryBg": "#0000001a",
          "colorPrimaryBgHover": "#919191",
          "darkItemSelectedBg": "#1e2938"
        },
        "components": {
          "Menu": {
            "darkItemSelectedBg": "#2d2d2d",
          },
          "Table": {
            "headerBg": "#000000",
            "headerColor": "#EFEFEF",
            "headerBorderRadius": "2px",
          }

        }
      }}
    >
      <RouterProvider router={router} /> 
    </ConfigProvider>
  </React.StrictMode> 
  
);
