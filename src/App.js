import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';



function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>I am an component, Neha Code for test.</h1>
      <h1>My Project Name is : {props.myname}</h1>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return{
    myname:state.name
  }
}
export default connect(mapStateToProps)(App);
