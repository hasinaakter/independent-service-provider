import { useEffect, useState } from "react"

const ServicesList = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('servicesData.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    
    return [services, setServices];
};

export default ServicesList;