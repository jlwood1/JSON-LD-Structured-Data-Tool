import React from 'react';
import DropdownWidget from '../components/widgets/DropdownWidget'; 
import DynamicForm from '../components/forms/DynamicForm';
import {connect} from 'react-redux';
import {updateDropdown} from '../reducers/appReducer'; 

let App = (props) => {
  return (
    <div className = 'app-wrapper'>
      <div className = 'app-header'> 
        <span className = 'title'> JSON-LD <br></br> Structured Data Generator</span>
      </div>
      <div className = 'about'> 
          <span className = 'about-title'>Schema markup generator tool<br/></span> 
          <span className = 'about-content'>
            This tool is a <a href= "https://schema.org/" className = "link"> Schema.org </a> based structured data generator which can be used to easily create JSON-LD structured data for any type of website content. <br></br> <br></br> 

            The tool has default options for common website content such as Articles, Events, FAQ Pages, How-To's, Job Postings etc. <br></br><br></br>

            Once you have completed the below form. You can automatically test your JSON-LD with googles rich results test and then download your JSON-LD script to use with your website content. 
          </span>
      </div> 
      <div className = 'term-dropdown-container'>
        <h1 className = 'text-large'> Which type of schema do you want to create? </h1>
        <DropdownWidget
          placeHolder = 'Select Term...' 
          options = {["Article", "Event", "FAQ Page", "Job Posting", "Local Business", "Organization", "Person", "Product", "Recipe", "Video", "Website"]}
          dropdown = {'termDropdown'}
          dropdownValue = {props.termDropdown}
          onUpdate = {props.updateDropdown}
          showDropdown = {true}
        />
      </div>
      <DynamicForm
       term = {props.termDropdown}
       update = {props.updateDropdown}
      />
    </div>
    
  );
}


const mapStateToProps = (state) => {
  return {
      termDropdown: state.app.termDropdown,
  }
}
  
App = connect(mapStateToProps, {updateDropdown})(App)

export default App;
