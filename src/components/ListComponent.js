import React, {useState, useEffect} from 'react';
import { Button, UncontrolledCollapse, Card, CardBody } from 'reactstrap';
// import { fetchArticles } from '../redux/ActionCreators';
// lose this and use async fetch call , just using this for testing
import {Link} from 'react-router-dom';

import {imgUrl} from '../redux/ActionCreators';



const ListComponent = () =>  {
    
    const [articleList, setArticles] = useState([]);
    

    // show message var and function
    
    
    // fetch data

    useEffect(() => {
        const fetchArticles = async () => {
        try {
          
            const response = await fetch(
              `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYTIMES_READER_API_KEY}`
              )
              const articleList = await response.json()
              setArticles(articleList.results) 
              
              
        } catch(error) {
          console.error(error)
        }
      }
        fetchArticles()
      }, [])
    


    return (
        <div>
            <Button className="mt-4 btn-lg" color="primary" id="toggler" >
                                    Read Abstracts
                                    </Button>
            {articleList.map((articleListItem) => {
                const{abstract, title, byline, published_date, asset_id } = articleListItem
                
                return(
                    <div className="media container mt-4 " key={asset_id}>
                        
            
                        
                        <div className=" row col-12 ">
                            <div className="col-2 align-self-center mr-3">
                                <img className="rounded-circle " src={imgUrl} height="50" width="50" alt="story thumbnail"/>
                                
                            </div>
                            
                            <div className="media-body col-10 text-left">
                                <div className="ml-auto ">
                                        <Link to="/home/detail">
                                        <h6 className="font-weight-bold text-dark">
                                            {title}
                                        </h6>
                                        </Link>
                                        
                                        
                                    
                                    <p className="mb-0 text-dark text-uppercase">{byline}</p>
                                    <p className="text-right text-dark"><span className="fa fa-calendar text-dark"></span> {published_date}</p>
                                    
                                    

                                    <UncontrolledCollapse toggler="#toggler">
                                    <Card>
                                        <CardBody >
                                            <p>{abstract}</p>
                                        </CardBody>
                                    </Card>
                                    </UncontrolledCollapse>

                                    
                                    
                                    
                                    
                                    
                                </div>
                                
                            </div>
                            <div className="col-2 align-self-center">
                                <span className="fa fa-chevron-right"></span>
                            </div>
                            
                            
                        </div>
                        
                        <hr></hr>
                        

                        
                        
                        
                        
                        
                       
                        
                    </div>
                )



            })}
            
            

            
        </div>
        
        
    
    );
}
  

 
export default ListComponent;