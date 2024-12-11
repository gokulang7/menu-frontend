// import React, { useState } from 'react';
// import MenuTabs from './components/MenuTabs';
// import MenuSection from './components/MenuSection';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Add from './components/Add';
// import { MDBTooltip } from 'mdb-react-ui-kit';
// import AddItem from './components/AddItem';
// // import {Routes,Route} from 'react-router-dom';


// import './components/styles.css';



// const menuData = {
//     food: [
//         { name: 'Biriyani', description: 'Biryani is a delicious rice dish peppered with scrumptious spices like saffron and cumin and further layered with spiced meat or veggie protein. Typically, this layered rice dish is enriched with added yogurt or ghee, a clarified butter, for an extra boost of luxurious flavor', price: 14 },{ name: 'Pasta', description: 'Pasta is a food made from flour, water, and sometimes eggs, that is shaped and dried or used fresh. It is usually cooked in hot water and eaten with sauce, fried, or in soup. Pasta comes in many different shapes and sizes, and is often named after its appearance. For example, long pasta is called noodles, and short pasta is named for what it looks like, such as bow-ties.', price: 8 },{ name: 'Fried Chicken', description: 'The perfect fried chicken is crispy on the outside, with a flavourful crust that contrasts and complements the tender chicken it contains. The starch is deeply browned, allowing the complex flavours created by the Maillard reaction to shine through, without letting anything burn.', price: 18 }
        
//     ]
    
//     ,
//     drinks: [
//         { name: 'Kannur Cocktail', description: ' it actually is a mocktail made with chilled milk, papaya, pomegranate and dried fruits. The drink which was only available in Kannur is now served in other districts too as. ' , price: 16 },
//         { name: 'Blue Lemon Mojito', description: ' Blue Curaçao, rum, mint, and lime juice come together to make this delicious and unique Blue Mojito. With the same minty and citrusy flavor that makes a mojito great, this blue mojito is a colorful twist on a classic. Garnish with a sprig of mint and some lime slices to highlight the blue color!. ' , price: 12 },
//         { name: 'Avil milk', description: 'Aval Milk or Avil Milk is a Kerala cuisine drink sold in the streets of the Malabar region of Kerala, India. Aval milk is made with aval which is essentially poha or beaten rice flakes, along with ripe bananas, milk of any kind, and nuts. ' , price: 16 }
//     ],
//     brunch: [
//         { name: 'BAR 42 MARY', description: 'Tomato juice, horseradish, celery salt, black pepper, tabasco, fully loaded.', price: 14 },
//         { name: 'French Toast Casserole', description: 'If you love make-ahead brunch ideas, you have to try this French toast casserole! You can assemble it the night before and bake it off in the morning. With its moist, custardy middle and crisp topping.', price: 14 }
        
//     ],
// };

// function App() {
//     const [activeMenu, setActiveMenu] = useState('food');

//     const handleTabClick = (menu) => {
//         setActiveMenu(menu);
//     };

//     return (
//         <div className="menu-container">
//           <Navbar/>
//           <Home/>
//             <MenuTabs activeMenu={activeMenu} onTabClick={handleTabClick} />
//             <MenuSection menu={activeMenu} items={menuData[activeMenu]} />
           

//             {/* <Routes>
//             <Route path='add' element={<AddItem/>}/>
//             </Routes> */}
            
//         </div>
//     );
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuTabs from './components/MenuTabs';
import MenuSection from './components/MenuSection';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import Add from './components/Add';



import './components/styles.css';
import Footer from './components/Footer';

const menuData = {
  food: [
    { name: 'Biriyani', description: 'Biryani is a delicious rice dish...', price: 14 },
    { name: 'Pasta', description: 'Pasta is a food made from flour...', price: 8 },
    { name: 'Fried Chicken', description: 'The perfect fried chicken is crispy...', price: 18 },
  ],
  drinks: [
    { name: 'Kannur Cocktail', description: 'A mocktail made with chilled milk...', price: 16 },
    { name: 'Blue Lemon Mojito', description: 'Blue Curaçao, rum, mint...', price: 12 },
    { name: 'Avil milk', description: 'Aval Milk or Avil Milk is a Kerala drink...', price: 16 },
  ],
  brunch: [
    { name: 'BAR 42 MARY', description: 'Tomato juice, horseradish...', price: 14 },
    { name: 'French Toast Casserole', description: 'If you love make-ahead brunch ideas...', price: 14 },
  ],
};

function App() {
  const [activeMenu, setActiveMenu] = useState('food');

  const handleTabClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <Router>
      <div className="menu-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <MenuTabs activeMenu={activeMenu} onTabClick={handleTabClick} />
                <MenuSection menu={activeMenu} items={menuData[activeMenu]} />
                <Add/>
                <Footer/>

              </>
            }
          />
          <Route path="/add-item" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

