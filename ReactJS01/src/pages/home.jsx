import { Result } from "antd";
import { CrownOutlined } from '@ant-design/icons';

const HomePage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Result
        icon={<CrownOutlined />}
        title={"JSON web Token (React/Node.JS) - ionsstar.vn"}
      />
    </div>
  )
}

export default HomePage;
