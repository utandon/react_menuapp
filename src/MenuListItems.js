import React, {Component} from 'react';

function MenuListItems(props) {
  return (
    <div>
      <h4>Items in Category: ({props.categoryShortName})</h4>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Description</th>
          </tr>
        </thead>
        <tbody>
          {props.menuItems.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MenuListItems;
