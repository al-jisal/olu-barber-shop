import DepthCarousel from '../components/depth-carousel';

const items = [
  { image: 'https://picsum.photos/seed/a/800/1000', alt: 'One' },
  { image: 'https://picsum.photos/seed/b/800/1000', alt: 'Two' },
  { image: 'https://picsum.photos/seed/c/800/1000', alt: 'Three' },
  { image: 'https://picsum.photos/seed/d/800/1000', alt: 'Four' },
  { image: 'https://picsum.photos/seed/e/800/1000', alt: 'Five' }
];

const Sample = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="sample">
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <DepthCarousel
                        items={items}
                        // depth={220}
                        // spread={90}
                        // tilt={22}
                        tiltDirection="right"
                        perspective={1400}
                        visibleCards={4}
                        falloff={0.2}
                        blur={6}
                        loop
                        cardWidth={700}
                        cardHeight={700}
                        radius={18}
                        tint="#05060a"
                        duration={700}
                        ease="power3.out"
                        showControls
                        showIndicators
                    />
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">

                </div>
                
            </div>
        </section>
    )
}
export default Sample