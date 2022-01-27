import React from 'react';
import Navbar from '../Navbar/Navbar';

function Home(){
    return (
        <div>
            <Navbar />
            <header>
                <div className="container">
                    <h1 className='text-center'>IMAGINE A PLACE...</h1>
                    <div className="row">
                        <div className="col-6 offset-3 d-flex justify-content-center">
                            
                            <p>...where you can belong to a school club, a gaming group and a worldwide art community.Where just you and handful of friends can spend time together. A place that makes it easy to talk everyday and hang out more often</p>
                            
                        </div>
                    </div>
                    
                </div>
                
            </header>
        </div>
    )
} 
export default Home;
