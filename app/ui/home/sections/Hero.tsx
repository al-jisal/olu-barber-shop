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
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-2">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Desmond <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building Digital Footprints
                </p>
            </div>
        </section>
    )
}
export default Hero;