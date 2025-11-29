const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery Call",
            description: "We learn about your business, goals, and target market to create a customized strategy.",
        },
        {
            number: "02",
            title: "Strategy Development",
            description: "Custom marketing plan tailored to your local market and business objectives.",
        },
        {
            number: "03",
            title: "Campaign Launch",
            description: "Multi-channel campaigns go live across Google, Facebook, and other platforms.",
        },
        {
            number: "04",
            title: "Lead Generation",
            description: "Qualified leads start flowing directly to your business through optimized funnels.",
        },
        {
            number: "05",
            title: "Optimization",
            description: "Continuous improvement and refinement for maximum ROI and lead quality.",
        },
    ];

    return (
        <section id="process" className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
            <div className="container">
                <div className="wow fadeInUp text-center mb-12" data-wow-delay=".1s">
                    <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                        How It Works
                    </h2>
                    <p className="text-base !leading-relaxed text-body-color md:text-lg">
                        Our proven process for generating quality pool leads
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute left-0 top-0 hidden h-full w-full lg:block">
                        <div className="absolute left-1/2 top-12 h-[calc(100%-6rem)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-accent"></div>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`wow fadeInUp flex flex-col items-center lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                                data-wow-delay={`.${index + 1}s`}
                            >
                                {/* Content */}
                                <div className="w-full lg:w-5/12">
                                    <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                                        <h3 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                                            {step.title}
                                        </h3>
                                        <p className="text-base font-medium leading-relaxed text-body-color">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Number Badge */}
                                <div className="relative z-10 my-6 lg:my-0 lg:w-2/12">
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-lg aqua-glow">
                                        <span className="text-2xl font-bold text-white">{step.number}</span>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden w-5/12 lg:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
