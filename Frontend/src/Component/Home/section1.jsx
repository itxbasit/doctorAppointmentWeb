import Sec1 from "./Sec1"
import Sec from "./Sec"
import Card from "./card"
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import Slider from "./Slider";
export default function Section() {
    return (
        <>
            <div className="flex flex-wrap justify-center pl-11 pr-11 pt-2 pb-2" style={{backgroundColor: "whitesmoke"}}>
                <Sec/>
            </div>
            <div>
                <Sec1/>
            </div>
            <div className="text-center">
                <h1 className="text-4xl">An easy-to-use appointment scheduling app for doctors and patients.</h1>
            </div>
            <div className="flex flex-wrap justify-between pt-5 pr-3 pb-5 pl-3 m-3">
                <Card icon={<LibraryBooksOutlinedIcon  style={{fontSize: "3rem"}}/>} title={"Create your practice's Booking Page"} para={"Display your medical services online. Customize your Booking Page with your logo, contact details, reviews and more."} para1={" Share specialists’ availability and let patients confirm their appointments in minutes."}/>

                <Card icon={<CreditScoreOutlinedIcon  style={{fontSize: "3rem"}}/>} title={"Book appointments from your website"} para={"Add a 'Book Now' button to your practice’s website. Enable new and existing patients to self-book right away, without needing to contact your office."} para1={"Connect Setmore with Squarespace, WordPress and more."}/>

                <Card icon={<ForwardToInboxOutlinedIcon  style={{fontSize: "3rem"}}/>} title={"Set up automatic appointment confirmations"} para={"Attend to more patients while Setmore automates booking confirmations via email."} para1={"Personalize alerts with important pre-appointment information so visitors come prepared."}/>
            </div>
            <div>
                <Slider/>
            </div>
        </>
    )
}