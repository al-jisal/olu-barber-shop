import BarberCard from '../components/barberCard';

const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 mx-10 border-t border-red-500 text-white-600" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-5">
                <div className="flex flex-row justify-center items-center">
                    <BarberCard
                        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                        altText="Kendrick Lamar - GNX Album Cover"
                        captionText="Kendrick Lamar - GNX"
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight={300}
                        imageWidth={300}
                        displayOverlayContent
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className=" text-lg text-white-800">
                        <strong>Contact</strong>
                    </div>
                    <a href="tel:+15089268050">(508) 926-8050</a>
                </div>
                <div className="flex flex-col justify-center items-center"> 
                    <div className=" text-lg text-white-800">
                        <strong>Location</strong>
                    </div>
                    <address>
                        <a href='https://maps.app.goo.gl/LNV2wHjyFmp8bdzXA' target='_blank'>
                            687 Millbury St,<br/>
                            Worcester, MA
                        </a>
                    </address>
                </div>
                <div className="flex flex-col justify-center items-center"> 
                    <div className=" text-lg text-white-800">
                        <strong>Developer</strong>
                    </div>
                    <p> aljisal.frimpong@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;