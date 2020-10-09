import React from 'react';
import DropdownWidget from '../components/DropdownWidget'; 
import DynamicForm from '../components/DynamicForm';
function App() {
  return (
    <div className = 'app-wrapper'>
      <div className = 'app-header'> 
        <span className = 'title'> JSON-LD <br></br> Structured Data Generator</span>
      </div>
      <div className = 'about'> 
          <span className = 'about-title'>Schema markup generator tool<br/></span> 
          <span className = 'about-content'>
            This tool is a <a href= "https://schema.org/" className = "link"> Schema.org </a> based structured data generator which can be used to easily create JSON-LD structured data for any type of website content. <br></br> <br></br> 

            The tool has default options for common website content such as Articles, Events, FAQ Pages, How-To's, Job Postings etc... The tool also provides an option for 'Other'  which will allow you to manually enter a term which will be checked to make sure that it exists in the vocabulary provided at <a href= "https://schema.org/" className = "link"> Schema.org </a> here:  <a href = "Schema.org/version/latest/schemaorg-current-http.jsonld" className = "link"> Current Schema </a> <br></br> <br></br> 

            Once you have completed the below form. You can automatically test your JSON-LD with googles rich results test and then download your JSON-LD script to use with your website content. 
          </span>
      </div> 
      <div className = 'dropdown-container'>
        <h1 className = 'text-large'> Which type of schema do you want to create? </h1>
        <DropdownWidget
          placeHolder = 'Select Term...' 
          options = {["Article", "Event", "FAQ Page", "How-to", "Job Posting", "Local Business", "Organization", "Person", "Product", "Recipe", "Video", "Website"]}
        />
      </div>
      <DynamicForm/>
    </div>
    
  );
}

export default App;
