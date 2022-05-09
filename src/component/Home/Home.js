import React from 'react';
import ServicesList from '../../hooks/ServicesList';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = ServicesList();

    return (
        <>
            <h1>WEDDING PHOTOGRAPHY</h1>
            {/* <Banner></Banner> */}
            <h1>SEE ABOUT SOME SERVICES</h1>
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