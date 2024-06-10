import React from 'react';
import '../../home.css';

export function Home() {
  return (
    <>
      <div className="main-content-1">
        <div className="main-content-left">
          <h1><span>TumorNet: </span> an <span className="highlight2">Artificial Intelligence</span>-Powered Tool for&nbsp;
            <span className="highlight">Tumor Classification </span>
          </h1>
          <p>
            Bringing advanced artificial intelligence to tumor diagnosis, this tool offers doctors a reliable
            resource for accurate classification. Integrating advanced Convolutional Neural Networks algorithms,
            our model analyzes breast ultrasound images and makes accurate predictions to enhance the accuracy of
            tumor classifications, asisting doctors in providing better patient care.
            {/*Our API provides developers and students with access to the latest news and articles from the&nbsp;
            <span>IEEE Spectrum website</span>, allowing you to easily integrate this data
            into your own websites, web applications or mobile apps. With a range of data available,
            our API <span className="highlight">is perfect for anyone looking to stay on top of
              the latest developments in the world of engineering and technology.</span>*/}</p>
        </div>
        <img src="./images/image1.svg" classname="medical" alt="" />
      </div>

      <div className="parallax-container">
        <div className="fade-in-element">
          <h1>80%</h1>
          <p>Model Accuracy</p>
        </div>
        <div className="fade-in-element">
          <h1>2100 ms</h1>
          <p>Maximum response time</p>
        </div>
        <div className="fade-in-element">
          <h1>100%</h1>
          <p>Succes Rate on API Calls</p>
        </div>
      </div>

      <div className="main-content-2">
        <img src="./images/image2.svg" alt="algorithm" />
        <p>
        The system employs a convolutional neural network (CNN) to recognize and classify breast ultrasound 
        images. Hosted on a dedicated server, the model processes uploaded images through an intuitive front-end 
        interface, enabling doctors receive instant predictions and insights from their own ultrasound scans. 
        This seamless integration allows for quick and reliable diagnostic support, helping doctors make 
        timely and informed decisions.
        </p>
      </div>
      <div className='main-content-3'>
        
      </div>
    </>
  )
}