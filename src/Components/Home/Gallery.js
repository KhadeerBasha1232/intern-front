import React from 'react'

const Gallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Your_HR</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">YourHR provides a comprehensive job search platform that caters to the needs of job seekers in a variety of industries. Whether you're a recent graduate just starting your career, or an experienced professional looking for a new opportunity, YourHR offers the tools and resources you need to find your next job.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?jobs"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/501x301/?jobs"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://source.unsplash.com/600x360/?jobs"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://source.unsplash.com/601x301/?jobs"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/502x302/?jobs"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/503x303/?jobs"/>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery
