import React, { Component } from 'react'
import Provider from './Context'
import Consumer from './Context'
import Test from './Test'

class Stories extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data: null,
            divHidden: React.createRef()
        }
        this.showDiv = this.showDiv.bind(this);
    }   

    showDiv() {
        console.log(this.state.divHidden.current)
    }
    

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=fmVbSyiWAkKm1RAmvBb4gDxv7YQjea3E")
        .then(val => val.json())
        .then(data => this.setState({data: data}));
    }

    render() {
        if(this.state.data === null) {return<h4 className="text-center text-dark">Loading ...</h4>}
        return (
            <div className="bg-dark text-light">
                <h6 className="text-left ml-5 p-2">
                    Number of Results {this.state.data.num_results}
                </h6>
                <h5 className="text-left ml-2 p-2">
                    Section of {this.state.data.section}
                </h5>
                <div className="container card-group">
                    {this.state.data.results.map(
                        (story) => 
                        (<div className="card text-dark" onClick={this.showDiv}>
                            <div className="card-body">
                                <h6 className="card-title">
                                    {story.abstract}
                                </h6>
                                <div ref={this.state.divHidden} className="hidden-div"></div>
                            </div>
                        </div>)
                    )}
                </div>
                <Test />
            </div>
        )
    }
}

export default Stories
