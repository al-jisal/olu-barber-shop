import { services } from "@/app/(backend)/constant";

const Services = () => {

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="services">
            <div className="w-full h-full mt-12 gap-15 flex flex-col justify-center items-center">
                <div className=" text-white-600 font-bold text-xl">
                    Services
                </div>
                <div className="grid grid-cols-2 min-h-screen text-white gap-15">
                    {services.map( ({id, title, price, desc}) => (
                        <div key={id} className="flex flex-col border border-red-500 rounded-xl gap-5">
                            <div className="flex flex-row gap-20">
                                <p>{title}</p>
                                <p>{price}</p>
                            </div>
                            <div className="text-white-500">
                                <p>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;