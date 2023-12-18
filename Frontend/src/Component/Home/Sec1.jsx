import img from '../../assets/images/setmore-laptop-phone-devices.png'

function Sec1() {
    return (
        <div className='sec1'>
            <div >
                <img src={img} alt="img1" />
            </div>
            <div className='mt-10 ml-6 mr-6'>
                <h1 className='mt-2'>Ease scheduling pains with a doctor appointment booking app.</h1>
                <p className='mt-2'>Empower your patients to book or reschedule appointments online 24/7. Reduce average booking time from 8+ minutes by phone* to just a few clicks. (*Accenture)</p>
                <button className="btn btn-primary mt-2">Sign up Free Today</button>
            </div>
        </div>
    )
}
export default Sec1