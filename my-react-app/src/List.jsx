import PropTypes from 'prop-types';

function List(props) {

    const category = props.category || "Category";
    const itemList = props.items || [];
    
    // const fruits = [
        // {id: 1, name: "Apple", calories: 95}, 
        // {id: 2, name:"Orange", calories: 45}, 
        // {id: 3, name:"Banana", calories: 105}, 
        // {id: 4, name:"Coconut", calories: 125}, 
        // {id: 5, name:"Pineapple", calories: 37}
    //   ];
      
    // a and b are fruits in the array for example a is Apple and b is Orange
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC (LOW TO HIGH)
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC (HIGH TO LOW)

    // filter which means take the fruits that have less than 100 and put them in a new array
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    // const listItems2 = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

    // const listItems3 = highCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

    return(
        <div id="listItems">
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            {/* <ol>{listItems2}</ol> */}
            {/* <ol>{listItems3}</ol> */}
        </div>
    );
}

// propTypes data types
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number, 
            name: PropTypes.string, 
            calories: PropTypes.number
        })
    )
};

export default List