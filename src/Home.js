import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import tro from './tropic.png'
import tre from './trek.png'
import clu from './club.png'
import tot from './total.png'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList"))
    }
  }

  counting(arr) {
    let count = 0
    for (let e of arr) {
      if (e.type === "Tropic")
        count++
    }
    return count;
  }

  render() {
    let typeArr = this.state.tripsArr.map(ele => ele.type)
    return <>
      <div className='parent'>
        <div className='totalTrips'><img id="img0" src={tot} width="100" height="100"></img><span>Total : </span>{(this.state.tripsArr).length}</div><br></br>
        <div className='tripDetails'>

          <div id="first"> <img id="img1" src={tro} width="100" height="100"></img>
          <span>Tropic : </span>
          {
            typeArr.reduce((total, ele) => {
              if (ele === "Tropic")
                total++
              return total
            }, 0)
          }
          </div>

          <div id="sec"> <img id="img2" src={tre} width="100" height="100"></img>
          <span>Trek : </span>
          {
            typeArr.reduce((total, ele) => {
              if (ele === "Trek")
                total++
              return total
            }, 0)
          }
          </div>

          <div id="third"> <img id="img3" src={clu} width="100" height="100"></img>
          <span>Club : </span>
          {
            typeArr.reduce((total, ele) => {
              if (ele === "Club")
                total++
              return total
            }, 0)
          }
          </div>

        </div>
      </div>
      <div className='links'>
        <div id="ho"><Link to="/">Home</Link></div><br></br><br></br>
        <div id="ad"><Link to="/add">Add</Link></div><br></br><br></br>
        <div id="tr"><Link to="/list">Trips</Link></div><br></br><br></br>
      </div>
    </>
  }
}

export default Home;