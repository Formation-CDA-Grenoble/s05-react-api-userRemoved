import React, { Component } from 'react';
//list déroulante 

class Selector extends Component {
    
    
        state = {
            currentType: 'films',
            currentId: 1,  
        }; 

        setId = (event) => {
            console.log(event.target.value) 
            this.setState ({currendId: event.target.value})
        }
        
        render = () => {return (

            <form>
                
            <select >
                <option value="films">Hamster</option>
                <option value="planets">Parrot</option>
                <option value="people">Spider</option>
               
            </select>
                <input type="number" defaultValue = {1} onChange = {this.setId}/>
                <input type="submit"/>
                
            </form>
            
//champs nombre et submit
        );
    }
}

export default Selector ; 