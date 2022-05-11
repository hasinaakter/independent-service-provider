import React from 'react';
import ServicesList from '../../hooks/ServicesList';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = ServicesList();

    return (
        <>
            <Banner></Banner> 
            <br/>

            {/* Extra section */}
            <About></About>
            <h1>SEE ABOUT My SERVICES</h1>

            {/* load three services from hooks */}
            <div className='service-container'>

                {
                    services.slice(0, 3).map(service => <Service
                        key={service._id}
                        service={service}>

                    </Service>)
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;