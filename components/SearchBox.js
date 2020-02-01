import { Input, Tooltip, Icon } from "antd";
import { render } from "react-dom";

export default class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <Input
          size="large"
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          suffix={
            <Tooltip title="Extra information">
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />

        <br />
        <br />

        <Input prefix="￥" suffix="RMB" />
      </div>
    );
  }
}
