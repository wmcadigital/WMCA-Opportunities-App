/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import axios from 'axios';



export class indexNew extends Component {

    constructor(){
        super()


        this.state = {
            data: []
        }
    }

componentDidMount(){
    
    axios.get('https://raw.githubusercontent.com/wmcadigital/WMCA-Opportunities-App/SetUp0.0.8/public/todeleteopportunities.json')
    .then(res => {
      const data = res.data;
      this.setState({ data });
    })
    console.log(data);

    

}




    render() {
        return (
            <div>
                 <ul>
                    { this.state.data.map(data => <li>{data.id}</li>)}
                </ul>
            </div>
        )
    }
}

export default indexNew
