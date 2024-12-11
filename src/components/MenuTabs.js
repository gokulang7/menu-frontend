import React from 'react';

function MenuTabs({ activeMenu, onTabClick }) {
    return (
        <div className="menu-tabs">
            <button className={activeMenu === 'food' ? 'active' : ''} onClick={() => onTabClick('food')}>Food</button>
            <button className={activeMenu === 'drinks' ? 'active' : ''} onClick={() => onTabClick('drinks')}>Drinks</button>
            <button className={activeMenu === 'brunch' ? 'active' : ''} onClick={() => onTabClick('brunch')}>Brunch</button>
        </div>
        
    );
}

export default MenuTabs;
