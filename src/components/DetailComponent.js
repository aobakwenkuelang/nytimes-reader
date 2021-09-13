import React, {Component, useState, useEffect} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, NavLink, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap';
// import { fetchArticles } from '../redux/ActionCreators';
import { Link } from 'react-router-dom';
// lose this and use async fetch call , just using this for testing

import { articleData } from '../shared/articlesTest';
import {imgUrl} from '../redux/ActionCreators';



const DetailComponent = () => {

    // const [articleList, setArticles] = useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     const fetchArticles = async () => {
    //     try {
          
    //         const response = await fetch(
    //           `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYTIMES_READER_API_KEY}`
    //           )
    //           const articleList = await response.json()
              
    //           setArticles(articleList.results) 
              
              
    //     } catch(error) {
    //       console.error(error)
    //     }
    //   }
    //     fetchArticles()
    //   }, [])
    
    
    return (
        <div>
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Article Detail</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className=" container mt-4">
                
                <div className="row col-12">
                    <p className="display-4">{articleData[0].results[3].title}</p>
                </div>
                <div className="row col-12 justify-content-center">
                    <img className="" src={imgUrl}  alt="story"/>
                </div>
                <div className="row col-12 mt-2 justify-content-center">
                    <h4 className="">{articleData[0].results[3].byline}</h4>
                </div>
                <div className="row col-12 justify-content-center">
                    <p className="mt-4 lead ">{articleData[0].results[3].abstract}</p>
                    <p> Full story cannot be displayed here due to copyright and The NY Times paywall. Visit 
                        {" " + articleData[0].results[3].url} to read the full story.
                    </p>
                    <p className="mt-5">
                        <em>
                            Published by: {" " + articleData[0].results[3].source + " "} within the {" " + articleData[0].results[3].subsection + " "} section.
                        </em>
                        
                    </p>
                </div>
                
                
            </div>
        </div>
    
    );
    }
  
  


export default DetailComponent;