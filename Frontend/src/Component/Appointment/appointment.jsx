import Card from "./card"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Appointment(){
    const [data, setData] = useState()
    useEffect(() => {
      axios.get('http://localhost:9000/doctor', {
  
      }).then(function (res) {
        setData(res.data.message);
      })
    }, [])
    return(
        <div className="flex flex-wrap justify-evenly">
            {
                data?.map((k,v)=>{
                    return(
                        <Card img={k.img_url} title={k.name} category={k.category} time={k.timing} days={(JSON.stringify(k.days)).toString()} rating={k.rating} id={k._id}/>
                    ) 
                })
            }
        </div>

    )
}