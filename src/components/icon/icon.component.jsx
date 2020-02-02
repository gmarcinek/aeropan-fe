import React from 'react'
import { ReactComponent as Back } from '../../assets/img/arrow_back_ios-24px.svg'
import { ReactComponent as Downward } from '../../assets/img/arrow_downward-24px.svg'
import { ReactComponent as ForwardIos } from '../../assets/img/arrow_forward_ios-24px.svg'
import { ReactComponent as Forward } from '../../assets/img/arrow_forward-24px.svg'
import { ReactComponent as Upward } from '../../assets/img/arrow_upward-24px.svg'
import { ReactComponent as Menu } from '../../assets/img/menu-24px.svg'
import { ReactComponent as More } from '../../assets/img/more_horiz-24px.svg'
import { ReactComponent as StreetView } from '../../assets/img/streetview-24px.svg'
import './icon.css'

export class Icon extends React.Component {
  static displayName = 'Icon'

  components = {
    back: Back,
    down: Downward,
    forwardios: ForwardIos,
    forward: Forward,
    upward: Upward,
    menu: Menu,
    more: More,
    streetView: StreetView
  }

  render() {
    const { name, ...rest } = this.props
    const SvgIcon = this.components[name]

    return (
      <div className={'aeropan-icon'} {...rest}>
        <SvgIcon style={{
          fill: this.props.color || 'white',
          width: this.props.size || '1rem',
        }} />
      </div>
    )
  }
}
