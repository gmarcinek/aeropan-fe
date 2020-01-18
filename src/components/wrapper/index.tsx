import React, { Fragment } from 'react'

export class Wrapper extends React.Component<{}, {}> {
  render() {
  return (<>{this.props.children}</>);
  }
}

export default Wrapper;
