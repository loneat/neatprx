import React, { Component } from 'react';
import '../elements/Success.css';

class Success extends Component {

    
    state = {
        images: []
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/success_posts', {
            method: 'get'
        })
        .then(result => result.json())
        .then(result => {
            this.setState({images: result})
        })
        .catch(err => {
            console.warn('Error..')
            console.error(err)
        })
    }

    render() { 

        return(
            <div className="success">
                <div className="success-inner">
                    <h7 className="dsh-title">Our Latest Success</h7>
                    <ul className="success-content">
                        {
                            this.state.images.reverse().map(image => {
                                return (
                                    <li>
                                        <div className="success-message">
                                            <img src={image} alt="success"/>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Success;