import React from 'react';
import Gen_stud from './generate_students.js'

class App extends React.Component{
    constructor(props){
        super(props);
        
       
    }
    
  

    render(){
        return (
            <div>
            
                <Gen_stud></Gen_stud>
            </div>
        )
    }
}



export default App