import doc from '../../assets/images/doc.png'

export default function Sec(){
    return(
        <div className='text-center mb-6 mt-3'>
            <h1 style={{fontSize:"2rem", fontWeight: "500"}}>Online doctor appointment scheduling software.</h1>
            <p className="text-center" style={{fontWeight: "500"}}>Increase efficiency and keep patients at the heart of your practice.</p>
        <div className='img-bg mt-3'> 
            <img style={{marginBottom: '-30px'}} src={doc} alt="sec1" />
        </div>
        </div>
    )
}