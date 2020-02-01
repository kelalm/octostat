import { Input, Tooltip, Icon } from "antd";
import { render } from "react-dom";

export default class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <Input
          size="large"
          placeholder="Enter username"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          suffix={
            <Tooltip title="This is the user you'd like more information on.">
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />

        <br />
        <br />
      </div>
    );
  }
}
