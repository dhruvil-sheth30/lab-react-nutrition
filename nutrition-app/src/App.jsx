import { Component } from 'react';
import './App.css'
import khana from "./resources/FoodData"
import FoodBox from "./components/FoodBox"

class App extends Component{

  constructor(){
    super();
    this.state = {
      filteredData : [...khana],
    }
  }

  render(){

    let handleChange = (event) =>{
      
      let searchText = event.target.value.toLowerCase();

      let searchResults = khana.filter((el) => {
        return el.name.toLowerCase().includes(searchText); 
      })

      this.setState({
        filteredData : searchResults,
      })
    }

    return(
      <div>
          <div className='input'>
              <input type="text" className='search' placeholder='Search Here' onChange={handleChange} />
          </div>
          {this.state.filteredData.map((el,i) =>(
            <FoodBox foodItem = {el} key={i} />
          ))

          }     
      </div>
    )
  }
}

export default App