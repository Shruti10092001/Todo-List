import Plan from './Plan';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'

//   return (
//     <div className="App">
//       <h1>Todat's plane</h1>
      
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    items:[],
    text:""
  }
  handleChange = e =>{
    this.setState({text: e.target.value})
  }
  handleAdd = e =>{
    if (this.state.text !== ""){
      const items =[...this.state.items, this.state.text];
      this.setState({ items: items, text:""});
    }
  }
  handleDelete = id =>{
    console.log("Deleted, id");
    const olditems = [...this.state.items]
    console.log("olditems",olditems);
    const items = olditems.filter((Element, i) =>{
      return i !== id
    })
    console.log("Newitems", items)
    this.setState({ items:items });
  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto text-white
          shadow-lg p-2'>
            <h2 className='text-center'>Today's Plane</h2>
            <div className='row'>
              <div className='col-9'>
                <input type="text" className='form-control' placeholder='write your plane' value={this.state.text} onChange={this.handleChange}/>
              </div>
              <div className='col-2'>
                <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
              </div>
              <div className='conatiner-fluid'>
                <ul className='list-unstyled row m-5'>
                  {
                    this.state.items.map((value,i)=>{
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
export default App;