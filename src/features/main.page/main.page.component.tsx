import React from 'react'

export class MainPageComponent extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <>
        <div>innerWidth: {window.innerWidth}</div>
        <div>innerHeight: {window.innerHeight}</div>
        <div>outerWidth: {window.outerWidth}</div>
        <div>outerHeight: {window.outerHeight}</div>
      </>
    )
  }
}
