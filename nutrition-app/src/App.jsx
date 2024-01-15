import { Component } from 'react'
import FoodBox from './component/FoodBox'
import FoodData from './component/FoodData'
import "./App.css"
import Search from './component/Search'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       search: ""
    }
  }

  handleSearch = (value) => {
    this.setState({search: value})
  }


  render() {
    return (
      <div className='App'>
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        {FoodData.filter((el) => {
            if(this.state.search == ""){
                return el
            } else if (el.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return el
            }
        }).map((el) => {
            return(
                <div key={el.id}>
                    <FoodBox food={el}  />
                </div>
            )
        })
        }
      </div>
    )
  }
}