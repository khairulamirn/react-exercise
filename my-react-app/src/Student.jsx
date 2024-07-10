import PropTypes from 'prop-types';

function Student(props,) {

    return(
        <div className="student">
            <p>Name: {props.name || "Guest"}</p>
            <p>Age: {props.age || 0}</p>
            <p>Student: {props.isStudent !== undefined ? (props.isStudent ? "Yes" : "No") : "No"} </p> 
            {/* !== is the strict inequality comparison operator. */}
            {/*It returns true if the values and types are different, and false if they are the same.*/}
        </div>
    )
};

// propTypes
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

// defaultProps // deprecation of defaultProps in function components in future releases of React.
// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false
// };

export default Student;