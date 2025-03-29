import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import user_icon from '../../assets/user_icon.svg';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
                <div className="sidebar-item">
                    <img src={add_product_icon} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
                <div className="sidebar-item">
                    <img src={list_product_icon} alt="" />
                    <p>Product List</p>
                </div>
            </Link>
            <Link to={'/listusers'} style={{ textDecoration: 'none' }}>
                <div className="sidebar-item">
                    <img style={{width:'35px'}} src={user_icon} alt="" />
                    <p>Users List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar