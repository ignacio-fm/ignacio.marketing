import React, { Component } from "react";
import Slider from "react-slick";

export default class HomePageProjectsSlider extends Component {

  render() {
    const settings = {
      infinite: true,
      lazyLoad: true,
      swipeToSlide: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    const { projects } = this.props;
    const oddProjectClasses = "mt-5 mx-auto h-[200px] w-[300px] xl:w-[400px] object-cover rounded-lg -rotate-3 group-hover:-rotate-1 transition-transform duration-500 ease-in-out";
    const evenProjectClasses = "mt-5 mx-auto h-[200px] w-[300px] xl:w-[400px] object-cover rounded-lg rotate-3 group-hover:rotate-1 transition-transform duration-500 ease-in-out";

    return (
      <>
        <div className="px-4 md:px-6">
          <h3 className="text-center text-3xl font-bold tracking-tight my-6 md:mb-10">Mis proyectos</h3>
        </div>
        <div>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={`${index}`}>
                <a className="group outline-0" href={`${project.url}`}>
                  <img className={`${index % 2 === 0 ? evenProjectClasses : oddProjectClasses}`} src={`${project.frontmatter.projectImage}`} alt={`${project.frontmatter.projectTitle}`} />
                  <h3 className="text-center text-lg font-bold mt-2">{project.frontmatter.projectTitle}</h3>
                  <p className="text-center text-sm text-gray-500">{project.frontmatter.projectDescription}</p>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  };
};