import { Input, Tooltip, Icon } from "antd";
import { render } from "react-dom";

import { Button } from "antd";

export default class SearchBox extends React.Component {
  state = {
    loading: false
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

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

        <Button
          type="danger"
          shape="round"
          onClick={this.enterLoading()}
          loading={this.state.loading}
        >
          Search
        </Button>

        <br />
        <br />
      </div>
    );
  }
}
