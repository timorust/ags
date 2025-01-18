import React from 'react';

export default function Hero() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row my-10'>
        <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://www.akupunktur-noll.de/wp-content/uploads/2016/08/short-sightedness-myopia-is-considered-by-specialists-to-be-a-cause-of-glaucoma-en.png")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                Let's make your
                product a success
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              {/* <button className="btn btn-warning sm:btn-wide">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}