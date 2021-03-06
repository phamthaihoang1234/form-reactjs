import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        username : 'Pham Thai Hoang',
        password : '123456',
        gender : 0,
        rdLang : '',
        checkStatus : true
    };
  }

  onHandleChange = (event) => {
   var target = event.target;
   var name = target.name;// lấy ra name của từng ô input
      // kiểm tra xem kiểu input có phải là checkbox hay không
   var value = target.type === 'checkbox' ? target.checked : target.value;
   this.setState({
       // gán giá trị nhập được của từng ô input cho attribute của state vì name của ô input và tên attribute giống nhau
     [name] : value
   })

  }

  onHandleSubmit = (event) =>{
    event.preventDefault();// chặn onsubmit dữ liệu
    console.log(this.state);
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
                             name="username" // phải trùng với tên attribute của state
                             onChange={this.onHandleChange}
                             value={this.state.username}
                      />
                    </div>

                    <div className="form-group">
                      <label >Password</label>
                      <input type="password"
                             className="form-control"
                             name="password"
                             value={this.state.password}
                             onChange={this.onHandleChange}
                      />
                    </div>


                      <label>Gender</label>
                      <select name="gender"
                              className="form-control"
                              value={this.state.gender}
                              onChange={this.onHandleChange}
                      >
                          <option value={0}>Nam</option>
                          <option value={1}>Nữ</option>

                      </select>
                      <br/>
                      <label >Language</label>
                      <div className="radio">
                          <label>
                                {/*Muốn chọn một trong hai thì phải đặt hai cái name giống nhau*/}
                              <input type="radio" name="rdLang" value="en"
                                     onChange={this.onHandleChange}
                              />
                              English
                          </label>
                      </div>

                      <div className="radio">
                          <label>
                              <input type="radio" name="rdLang" value="vi"
                                     onChange={this.onHandleChange}
                              />
                              VietNamese
                          </label>
                      </div>

                      <br/>

                      <div class="checkbox">
                      	<label>
                      		<input type="checkbox"
                                   value={this.state.checkStatus}
                                   name = "checkStatus"
                                   onChange={this.onHandleChange}

                            />
                      		Checkbox
                      	</label>
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

