import React from 'react'

const Reviews = () => {
  return (
    <div className="container mx-auto py-16 pb-24 px-6 lg:px-0">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <div className="mockup-window border bg-base-300">
            <div className="flex justify-center lg:p-16 p-6 bg-base-200">
              "I have been using Cognition Center for the past few months to
              learn programming and I am extremely impressed with the quality of
              the courses offered. The instructors are knowledgeable and provide
              clear explanations, making it easy for me to understand the
              material. The interactive exercises and quizzes really help to
              solidify my understanding of the concepts. I highly recommend
              Cognition Center to anyone looking to learn programming or improve
              their skills." <br />
              <br />- Ruhul Amin
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="mockup-window border bg-base-300">
            <div className="flex justify-center lg:p-16 p-6 bg-base-200">
              "Cognition Center has been an invaluable resource for me as I work
              to improve my programming skills. The video lectures are
              well-produced and the instructors do a great job of breaking down
              complex concepts into easy-to-understand segments. I also love the
              variety of programming languages that are covered on the site,
              it's given me the opportunity to learn and explore new
              technologies. Overall, I highly recommend Cognition Center to
              anyone interested in learning to code." <br />
              <br />- Ayesha Khan
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="mockup-window border bg-base-300">
            <div className="flex justify-center lg:p-16 p-6 bg-base-200">
              "I recently discovered Cognition Center and I have been blown away
              by the quality of the courses. The instructors are knowledgeable
              and engaging, and the interactive exercises really help to
              reinforce the material. I have learned so much about programming
              in such a short amount of time, and I am confident that the skills
              I am learning will be valuable in my career. I highly recommend
              Cognition Center to anyone looking to learn programming or improve
              their skills." <br />
              <br />- Abdul Alim
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full">
          <div className="mockup-window border bg-base-300">
            <div className="flex justify-center lg:p-16 p-6 bg-base-200">
              "As a beginner programmer, I was looking for a resource that would
              provide a strong foundation in the basics. Cognition Center has
              exceeded my expectations in this regard. The course material is
              well-organized and easy to follow, and the instructors do a great
              job of explaining complex concepts in a way that is easy to
              understand. I have already recommended Cognition Center to several
              of my friends and colleagues and will continue to do so in the
              future." <br />
              <br />- Shafiqur Rahman
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  )
}

export default Reviews
