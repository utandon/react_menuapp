import React, {Component} from 'react';
import Axios from 'axios';
import MenuListItems from './MenuListItems';

class CategoryList extends Component {
  constructor(props){
    super(props);
    this.state= {
      categories: [],
      categoryShortName: null,
      menuItems: [],
      tableVisible: false,
    }
  }
  componentDidMount(){
    Axios.get(`https://davids-restaurant.herokuapp.com/categories.json`)
    .then((res) => {
      // console.log(res.data);
      this.setState({
        categories: res.data,
      });
    });
  }
  handleClick(categoryShortName){
    Axios.get(`https://davids-restaurant.herokuapp.com/menu_items.json?category=${categoryShortName}`)
    .then((res) => {
      // console.log(res.data.menu_items);
      this.setState({
        categoryShortName,
        menuItems: res.data.menu_items,
        tableVisible: true,
      })
    });

  }
  renderMenuListItems(tableVisible) {
    if(tableVisible) {
      return (
        <MenuListItems
          menuItems = {this.state.menuItems}
          categoryShortName = {this.state.categoryShortName}
        />
      );
    }
    else {
      return (<h4>Select a category to see detail item list</h4>);
    }
  }
  render(){
    return(
      <div>
        <div className="left-table">
          <h2>Categories</h2>
          <ul>
            {this.state.categories.map((cat, index) => {
              return (
                <li
                  className="category-content"
                  key={index}
                  onClick={() => this.handleClick(cat.short_name)}
                  >
                    {cat.name} - ({cat.short_name})
                  </li>
                )
              })
            }
        </ul>
        </div>
        <div className="right-table">
          {this.renderMenuListItems(this.state.tableVisible)}
        </div>
      </div>
    );
  }
}
//https://davids-restaurant.herokuapp.com/categories.json
//https://davids-restaurant.herokuapp.com/menu_items.json?category=
export default CategoryList;
