import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state={
    Ninjas:[
      {name:'kamal',age:15,belt:'black',id:1},
      {name:'Saman',age:30,belt:'green',id:2},
      {name:'Piyal',age:45,belt:'pink',id:3},
    ]
  }

addNinja = (newlyAddedNinjafromForm) => {
  newlyAddedNinjafromForm.id=Math.random();
let UpdatedNinjas=[...this.state.Ninjas,newlyAddedNinjafromForm]
this.setState({
  Ninjas:UpdatedNinjas
})
  
}

  render() {
    return (
      <div className="App">
      <h1>My First React App</h1>
      <p>welcome bros:)</p>
      
      <Ninjas ninjas={this.state.Ninjas}/>
      <AddNinja addxNinja={this.addNinja}/>
      </div>
    );
  }
}


export default App;
