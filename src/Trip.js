import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class ListTrip extends React.Component {
    constructor() {
        super()
        this.state = {
            tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList")),
            title: "All Trips",
            list: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList")).map(ele => {
                return <>
                    <div>{ele.date}</div>
                    <div>{ele.place}</div>
                    <div>{ele.type}</div>
                </>
            }
            )
        }
    }

    filterTrips(type) {
        if (type === "All")
            this.setState({
                title: type + " Trips",
                list: this.state.tripsArr.map(ele =>
                    <>
                        <div>{ele.date}</div>
                        <div>{ele.place}</div>
                        <div>{ele.type}</div>
                    </>
                )
            })
        else 
            this.setState({
            title: type + " Trips",
            list: this.state.tripsArr.map(ele => {
                if (ele.type === type)
                    return <>
                        <div>{ele.date}</div>
                        <div>{ele.place}</div>
                        <div>{ele.type}</div>
                    </>
            })
        })
    }

    render() {
        console.log(this.state.tripsArr)
        return <>
        <br></br>
            <div className='parent'>
                <div className='header'>{this.state.title}</div>
                <div id="bord">
                <div className='tripList'>
                    <div>Date</div>
                    <div>Place</div>
                    <div>Type</div>
                    {
                        this.state.list

                    }
                </div></div><br></br>
                <div className='radioButtons' onChange={(e) => this.filterTrips(e.target.value)}>
                    <span>Filter By &emsp;</span>
                    <input type="radio" value="Tropic" name="type" /> Tropic &emsp;
                    <input type="radio" value="Trek" name="type" /> Trek &emsp;
                    <input type="radio" value="Club" name="type" /> Club &emsp;
                    <input type="radio" value="All" name="type" /> None 
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

export default ListTrip;