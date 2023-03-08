import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class FoodList extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                   {this.props.foods.map((food) => <FoodListItem 
                                    key={food.no}
                                    name={food.name} 
                                    count={food.count}/>)}
            </div>
        );
    }
}

export default FoodList;