import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import coaching from '../img/coaching.jpg'
import group from '../img/group.jpg'
import leader from '../img/leadership.png'

function Cards() {

    const services = [
        {
            title: "1:1 Coaching",
            image: coaching,
            description:
                "Personalized one-on-one coaching to help you overcome challenges and reach your full potential."
        },
        {
            title: "Leadership Programs",
            image: leader,
            description:
                "Build the skills, mindset and strategies to lead with impact and inspire lasting change."
        },
        {
            title: "Group Coaching",
            image: group,
            description:
                "Join a supportive community and grow alongside other driven leaders committed to growth."
        }
    ]

    return (
        <section className="bg-[#1F3D2E] py-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-12">
                    <p className="uppercase tracking-[3px] text-[#C6C0B1] text-sm mb-3">
                        Coaching Programs
                    </p>

                    <h2 className="text-[#E9E4D6] text-4xl lg:text-5xl heading-primary max-w-2xl leading-tight">
                        Find the Right Path for Your Growth
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="bg-[#E9E4D6] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col cursor-pointer"
                        >

                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full aspect-square object-cover"
                            />

                            <div className="p-6 flex flex-col flex-1">

                                <h3 className="text-[#1F3D2E] text-2xl font-semibold mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-700 leading-7 flex-1">
                                    {service.description}
                                </p>

                                <button className="mt-8 flex items-center gap-2 text-[#1F3D2E] font-medium hover:gap-3 duration-300">
                                    Learn More
                                    <GoArrowUpRight className="text-xl" />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    )
}

export default Cards