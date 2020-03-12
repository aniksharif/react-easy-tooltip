import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EasyTooltip extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div>
        <a title={text} >
          {this.props.children}
        </a>
      </div>

    )
  }
}
