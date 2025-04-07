import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';

function App() {
  return (<ConfigProvider
    theme={{
          "token": {
        "colorSuccess": "#52c41a",
        "colorWarning": "#faad14",
        "colorError": "#f5222d",
        "colorPrimary": "#000000",
        "colorInfo": "#000000",
        "colorPrimaryTextHover": "#202020",
        "colorPrimaryHover": "#202020",
        "colorPrimaryBg": "#afafaf",
        "colorPrimaryBgHover": "#919191"
      }
    }}
  >
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </Space>
  </ConfigProvider>)
}

export default App;
