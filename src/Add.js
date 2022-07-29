import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class AddTrip extends React.Component {
    constructor() {
        super()
        this.state = {
            date: "",
            place: "",
            type: "",
 
            tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList"))
        }
    }

    submitInfo(date, place, type) {
        if(date === "" || place ==="" || type ===""){
            return null
        }
        else
        {

        let TripObj = {
            date: date,
            place: place,
            type: type
        }
        this.setState(prevState => ({
            tripsArr: [...prevState.tripsArr, TripObj],
            date: "",
            place: "",
            type: "Trek"
        }))
    }
    }

    render() {

        localStorage.setItem("tripList", JSON.stringify(this.state.tripsArr));

        return <>
            <div className='parent'>
                <div className='Header'>You Can Add a Trip Here</div>
                <div className='form'>
                    <div className='date'>
                        <div>Date</div>
                        <div><input type="date" id='date' value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })}></input></div>
                    </div><br></br>
                    <div>
                        <div>Place</div>
                        <div><input type="text" id='place' value={this.state.place} onChange={(e) => this.setState({ place: e.target.value })}></input></div>
                    </div><br></br>
                    <div>
                        <div>Type</div>
                        <div>
                            <select id='type' value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                                <option value="Trek" selected>Trek</option>
                                <option value="Tropic">Tropic</option>
                                <option value="Club">Club</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button id="btnGet" onClick={() => this.submitInfo(this.state.date, this.state.place, this.state.type)}>Submit</button>
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

export default AddTrip;