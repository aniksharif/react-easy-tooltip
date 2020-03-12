import React, { Component } from 'react'

import EasyTooltip from 'react-easy-tooltip'

export default class App extends Component {
  render () {
    return (
      <div>
        <EasyTooltip text='I am tooltip!' >
          <h1>Hover here</h1>
        </EasyTooltip>
        

      </div>
    )
  }
}
