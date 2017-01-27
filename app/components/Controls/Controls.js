import React, { Component } from 'react'
import { Link } from 'react-router'

import Button from '../../components/Button/Button'
import JokeNumber from '../../components/Input/JokeNumber'


export default class Controls extends Component {
  render(){
    return (
      <div>
        <Button className='new-jokes'
              targetPath='/jokes'
              text="New Jokes"
              onClick={this.props.getRandom}/>
        <JokeNumber
          onChange={this.props.handleNumber}
          value={this.props.number}/>
        <Button
              className='favorites'
              text="Favorites"
              targetPath='/favorites'
        />
      </div>
    )
  }
}
