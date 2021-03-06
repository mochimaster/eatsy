import React from "react";
import { Link } from 'react-router-dom';


const Categories = () => {

  return (
    <div className="HomepageContainer">
      <ul className='home-product-list'>
        <li className="homepage items category">
          <ul>
            <li><Link to={`/category/Drink`}><img className='homepage productImg'
              src={"https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_400/v1528824132/drinks2.jpg"}/></Link></li>
            <li className='home productName category'><Link to={`/category/Drink`} className="home productName category">Drinks</Link></li>
          </ul>
        </li>
        <li className="homepage items category">
          <ul>
            <li><Link to={`/category/Breakfast`}><img className='homepage productImg'
              src={"https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_400/v1528823978/bfast3.jpg"}/></Link></li>
            <li className='home productName category'><Link to={`/category/Breakfast`} className="home productName category">Breakfast</Link></li>
          </ul>
        </li>
        <li className="homepage items category">
          <ul>
            <li><Link to={`/category/Lunch`}>
              <img
                className='homepage productImg'
                src={"https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_400/v1528784152/lunch.jpg"}/></Link></li>
              <li className='home productName category'><Link to={`/category/Lunch`} className="home productName category">Lunch</Link></li>
          </ul>
        </li>
        <li className="homepage items category">
          <ul>
            <li><Link to={`/category/Dinner`}>
              <img
                className='homepage productImg bottom'
                src={"https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_400/v1528784149/dinner.jpg"}/></Link></li>
              <li className='home productName category'><Link to={`/category/Dinner`} className="home productName category">Dinner</Link></li>
          </ul>
        </li>
        <li className="homepage items category">
          <ul>
            <li><Link to={`/category/Snack`}>
              <img
                className='homepage productImg'
                src={"https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_400/v1528784157/snacks.jpg"}/></Link></li>
              <li className='home productName category'><Link to={`/category/Snack`} className="home productName category">Snacks</Link></li>
          </ul>
        </li>
        <li className="homepage items category">
          <ul>
            <li><Link to={`/category/Dessert`}>
              <img
                className='homepage productImg'
                src={"https://res.cloudinary.com/dwanjkcku/image/upload/c_scale,w_400/v1528784148/desserts.jpg"}/></Link></li>
              <li className='home productName category'><Link to={`/category/Dessert`} className="home productName category">Desserts</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
