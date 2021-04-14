import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        username : ''
    };
  }

  onHandleChange = (event) => {
    this.setState({
      username : event.target.value
    })

  }

  onHandleSubmit = (event) =>{
    event.preventDefault();// chặn onsubmit dữ liệu
  }




  render(){
    return (
        <div className="container mt-30">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit= {this.onHandleSubmit} >
                    <div className="form-group">
                      <label >Username</label>
                      <input type="text"
                             className="form-control"
                             name="txtName"
                             onChange={this.onHandleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="reset" className="btn btn-default">Delete</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}


export default App;
