import { Input, Tooltip, Icon } from "antd";
import { render } from "react-dom";

import Router from "next/router";

import { Button } from "antd";

import Link from "next/link";

export default class SearchBox extends React.Component {
  state = {
    loading: false,
    enteredValue: ""
  };

  enterLoading = () => {
    Router.push({
      pathname: "/user",
      query: { id: this.state.enteredValue }
    });
    this.setState({ loading: true });
    this.setState({ enteredValue: "Thanks. Searching now!" });
  };

  onChange = e => {
    this.setState({ enteredValue: e.target.value });
  };

  render() {
    return (
      <div>
        <Input
          size="large"
          placeholder="Enter username"
          value={this.state.enteredValue || ""}
          onChange={this.onChange}
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          suffix={
            <Tooltip title="This is the user you'd like more information on.">
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />

        {/* <Link href={"/user/" + this.state.enteredValue}> */}
        <Button
          type="danger"
          shape="round"
          onClick={this.enterLoading}
          loading={this.state.loading}
        >
          Search
        </Button>
        {/* </Link> */}

        <br />
        <br />
      </div>
    );
  }
}
