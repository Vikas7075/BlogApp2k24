import React from 'react';

const HomePost = ({ title, desc, image, username, updateAt }) => {

    const formatTimestamp = (updateAt) => {
        try {
            const date = new Date(updateAt);
            if (isNaN(date)) {
                throw new Error("Invalid date");
            }

            const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        } catch (error) {
            console.error("Error formatting timestamp:", error);
            return "Invalid Date";
        }
    };



    return (
        <div className="full-h-screen flex flex-col p-4 sm:p-1 md:p-8 m-0 justify-center">
            {/* Themes: blue, purple and teal */}
            <div data-theme="teal" className="mx-auto max-w-6xl">
                <h2 className="sr-only">Featured case study</h2>
                <section className="font-sans text-black">
                    <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                        <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60 md:w-[35%]">
                            <div className="h-full">
                                <article className="h-full">
                                    <div className="h-full">
                                        <img
                                            className="h-full object-cover"
                                            src={image}
                                            width="733"
                                            height="412"
                                            alt="img"
                                        />
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="p-6 bg-grey">
                            <div className="leading-relaxed">
                                <h2 className="leading-tight text-4xl font-bold">
                                    {title}
                                </h2>
                                <div className="flex mt-2 justify-between">
                                    <p className="text-gray-500 mr-4">@{username}</p>
                                    <p className="text-gray-500">{formatTimestamp(updateAt)}</p>
                                </div>
                                <p className="mt-4">
                                    {desc && desc.length > 300 ? `${desc.slice(0, 300)}   >>>Read More...` : desc}
                                </p>

                                {/* <p className="mt-4">
                                    In a jam-packed day filled with keynote sessions, panels, and
                                    virtual networking we explored topics including design leadership,
                                    UX ethics, designing for emotion and innovation at scale.
                                </p> */}

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePost;
