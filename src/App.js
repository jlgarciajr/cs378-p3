import './App.css';
import MenuItem from './components/MenuItem';
import { useState } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {

  const [counts, setCounts] = useState(Array(menuItems.length).fill(0));

  const reset = () => {
    setCounts(Array(menuItems.length).fill(0));
    setTotal(0);
  };

  const update = (index, newCount) => {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
    const subTotal = newCounts.reduce((acc, count, i) => acc + count * menuItems[i].price, 0);
    setTotal(parseFloat(subTotal.toFixed(2)));
  };

  const [total, setTotal] = useState(0);

  const showOrder = () => {
    if (total > 0) {
      let reciept = "Order Placed\n"

      menuItems.forEach((item, index) => {
        if (counts[index] > 0) {
          reciept += `${item.title}: ${counts[index]}\n`;
        }
      });
        
      alert(reciept);

    } else {
      alert("You have no items in cart");
    }
  }

  return (
    <div>
      <div className='row'>
        <img className='logo' src={'images/ramen-tatsu-ya-logo-white.png'} alt='logo'></img>
      </div>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <h3 className='subheader'>Japanese Soul Food</h3>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-4'>
          <img className='stylized-text' src={'images/RTY_2.0_Menubutton.png'} alt='stylized-text'></img>
        </div>
      </div>
      <br></br>
      <div className="menu">
        {menuItems.map((item, index) => (
        <MenuItem
          title={item.title}
          description={item.description}
          image={item.imageName}
          price={item.price}
          count={counts[index]}
          setCount={(newCount) => update(index, newCount)}
          total={total}
          setTotal={setTotal}
        /> 
      ))}
      </div>
      <div class='row'>
        <div class='col-6'>
          <h3>Subtotal: ${total}</h3>
        </div>
        <div class='col-3'>
          <button class="btn btn-outline-primary" onClick={showOrder}>Order</button>
        </div>
        <div class='col-3'>
          <button class="btn btn-outline-primary" onClick={reset}>Clear All</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
