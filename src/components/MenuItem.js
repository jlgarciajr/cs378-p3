import React from 'react';
import './MenuItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.



const MenuItem = ({ title, description, image, price, count, setCount, total, setTotal }) => {
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    
    return (
        <div className="row">
            <div className='col-4'>
                <img src={"images/" + image} className="card-img-top" alt={title}></img>
            </div>
            <div className='col-8'>
                <div className='row'>
                    <div className='col'>
                        <h4>{title}</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-7'>
                        <p>${price}</p>
                    </div>
                    <div className='col- 5'>
                        <button type="button" class="btn btn-outline-primary" onClick={increment}>+</button>
                        <button type="button" class="btn btn-outline-primary">{count}</button>
                        <button type="button" class="btn btn-outline-primary" onClick={decrement}>-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MenuItem;
