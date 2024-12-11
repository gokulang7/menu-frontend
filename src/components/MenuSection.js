// import React from 'react';

// function MenuSection({ menu, items }) {
//     return (
//         <div className={`menu-section ${menu}`}>
//             <h2>{menu.charAt(0).toUpperCase() + menu.slice(1)}</h2>
//             {items.map((item, index) => (
//                 <div className="menu-item" key={index}>
//                     <h3>{item.name}</h3>
//                     <p>{item.description}</p>
//                     <p>${item.price}</p>
//                 </div>
//             ))}

//       <button type="button" class="btn btn-primary"  >
//         Add Menu details
//         </button>

//         </div>

//     );
// }

// export default MenuSection;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MenuSection({ menu, items }) {
  const navigate = useNavigate();

  const url = "http://localhost:4000/item";

  const [menuItem, setMenuItems] = useState([]);
  console.log(menuItem);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(url, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json", 
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          setMenuItems(data); 
        } else {
          console.log("Failed to fetch menu items:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleAddMenuClick = () => {
    navigate("/add-item");
  };

  return (
    <div className={`menu-section ${menu}`}>
      <h2>{menu.charAt(0).toUpperCase() + menu.slice(1)}</h2>
      {menuItem.map((item, index) => (
        <div className="menu-item" key={index}>
          <h3>{item.itemName}</h3>
          <p>{item.description}</p>
          <p>${item.prize}</p>
        </div>
      ))}

      <button
        type="button"
        id='but'
        className="btn btn-primary "
        onClick={handleAddMenuClick}
      >
        Add Menu Details
      </button>
    </div>
  );
}

export default MenuSection;
