import React, { Component } from 'react';
//list déroulante 
class Selector extends Component {
    render = () => {
        
     
        return (

            <form>
                
            <select >
                <option value="films">Hamster</option>
                <option value="planets">Parrot</option>
                <option value="people">Spider</option>
               
            </select>
                <input type="number"/>
                <input type="submit"/>
                
            </form>
            
//champs nombre et submit
        );
    }
}

export default Selector ; 