import Link from 'next/link';
import Button from '../../home/components/button';
import { GridScan } from '../components/grid-scan';

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative" id='home'>
            <div className="w-full h-full absolute inset-0">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#ec150d"
                    gridScale={0.1}
                    scanColor="#a9261d"
                    scanOpacity={0.4}
                    enablePost={true}
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                    lineJitter={0.1}
                    scanGlow={0.5}
                    scanSoftness={2}
                />
            </div>
            <div className="w-full mx-auto flex flex-col justify-center items-center h-[60vh] sm:mt-36 mt-20 c-space gap-3 z-2">
                <p className="hero_tag text-white-500">
                    African-style cuts? Gotchu!
                </p>
                <p className="sm:text-lg text-base font-medium text-white-600 text-center font-generalsans">
                    We give you your best look ever away from home while you enjoy one of the closest atmosphere to home
                </p>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <Link href="#book" className="w-fit">
                    <Button name="Book Appointment" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </Link>
            </div>
        </section>
    )
}
export default Hero;