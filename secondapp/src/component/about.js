import React from 'react';
import {Link} from 'react-router-dom';

const AboutMe = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <h3>About Page</h3>
            </div>
            <div className="panel-body">
                <p>
                    About page is crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have a wide range of skills that include back-end development using open source technologies (NodeJs, PHP), design (working closely with designers), front-end development (AngularJs, Angular2, ReactJs, HTML5, CSS3, Javascript, Responsive, UX), Server Administrator(AWS, IBM, Azure),database(MongoDB,cassendra,Mysql), load balancing (Varnish and Memcached)
                </p>
                <h3>About Company</h3>
                <Link to="/about/Company">Details</Link>
                <h3>About Profile</h3>
                <Link to="/about/Profile">Details</Link>
                <h3>About Product</h3>
                <Link to="/about/Product">Details</Link>
            </div>
        </div>
    )
}

export default AboutMe;