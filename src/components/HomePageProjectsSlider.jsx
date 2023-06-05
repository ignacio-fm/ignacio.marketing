import React, { Component } from "react";
import Slider from "react-slick";

class HomePageProjectsSlider extends Component {

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 3,
      autoplay: false,
      //autoplaySpeed: 2500,
      arrows: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    const { projects } = this.props;
    const oddProjectClasses = "mt-5 mx-auto h-[200px] w-[400px] object-cover rounded-lg -rotate-3 group-hover:-rotate-1 transition-transform duration-500 ease-in-out";
    const evenProjectClasses = "mt-5 mx-auto h-[200px] w-[400px] object-cover rounded-lg rotate-3 group-hover:rotate-1 transition-transform duration-500 ease-in-out";

    return (
      <section className="w-full px-4 md:px-6 py-6">
        <div>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={`${index}`}>
                <a className="group" href={`${project.url}`}>
                  <img className={`${index % 2 === 0 ? evenProjectClasses : oddProjectClasses}`} src={`${project.frontmatter.projectImage}`} alt={`${project.frontmatter.projectTitle}`} />
                  <h3 className="text-center text-lg font-bold mt-2">{project.frontmatter.projectTitle}</h3>
                  <p className="text-center text-sm text-gray-500">{project.frontmatter.projectDescription}</p>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
};

export default HomePageProjectsSlider;