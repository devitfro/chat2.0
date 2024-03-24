import React, { Component } from 'react'

export default class Ccomponent extends Component {
   constructor(props) {
      super(props)

      this.state = {
         // name: "Alex"
         visibility: false
      }
      this.handleClick = this.handleClick.bind(this);
   }

   // handleClick() {
   //    this.setState({
   //       name: "Web Developer"
   //    })
   // }

   handleClick() {
      this.setState(state => ({
         visibility: !state.visibility
      }));
   }

   render() {
      if (this.state.visibility) {
         return (
            <div>
               <h1>Now yoy see me</h1>
               <button onClick={this.handleClick}>Click</button>
            </div>
         )
      }
      else {
         return (
            <div>
               <button onClick={this.handleClick}>Click</button>
            </div>
         )
      }
   }
}

