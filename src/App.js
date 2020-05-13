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

deleteNinjaFunction = (id) =>{
  let NinjaListAfterDeletingaNinja = this.state.Ninjas.filter(ninja =>{   //here ninja is the Ninja at a particular time when Iterating
    return ninja.id !== id //ninja is the Ninja at a particular time
  });
  this.setState({ 
    Ninjas:NinjaListAfterDeletingaNinja
  })
  }
  

  render() {
    return (
      <div className="App">
      <h1>My First React App</h1>
      <p>welcome bros:)</p>
      
      <Ninjas deleteNinjaProp={this.deleteNinjaFunction} ninjas={this.state.Ninjas}/>
      <AddNinja addxNinja={this.addNinja}/>
      </div>
    );
  }
}


export default App;
