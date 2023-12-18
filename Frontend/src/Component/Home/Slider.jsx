import img from '../../assets/images/setmore-laptop-phone-devices.png'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import { useEffect, useState } from 'react';

function DarkVariantExample({ name, category }) {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:9000/doctor', {

        }).then(function (res) {
            setData(res.data.message);
        })
    }, [])
    return (
        <Carousel data-bs-theme="dark" className='w-100 block'>
            <h1 className='text-center mb-3' style={{color: "#1f79fc", fontSize: "2rem", fontWeight: "500"}}>We Have</h1>
            {
                data?.map((k, v) => {
                    return (

                        <Carousel.Item className='items-center'>
                            <div className='text-center'>
                                <h1 style={{fontWeight: "500"}}>{k.category}</h1>
                                <h3 style={{fontWeight: "500"}}>{k.name}</h3>
                            </div>

                            <img
                                className='w-100 imgCar'
                                src={k.img_url}
                                alt={k.category}
                            />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>

    );
}

export default DarkVariantExample;