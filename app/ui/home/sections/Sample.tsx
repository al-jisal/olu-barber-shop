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
            <div className="grid lg:grid-cols-1 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <DepthCarousel
                        items={items}
                        visibleCards={3}
                        cardWidth={720}
                        cardHeight={650}
                        radius={18}
                    />
                </div>
            </div>
        </section>
    )
}
export default Sample