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
            Bringing <span className="highlight1">advanced artificial intelligence</span> to tumor diagnosis,
            this <span className="highlight6">open-source tool</span> offers doctors
            a reliable resource for accurate classification.
            Integrating <span className="highlight5">Complex Convolutional Neural Networks algorithms</span>,
            our model analyzes breast ultrasound images and makes <span className="highlight1">accurate predictions</span> to enhance the accuracy of
            tumor classifications, <span className="highlight6">asisting doctors</span> in providing better patient care.
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
        <img src="./images/image2.svg" className='cnn' alt="cnn" />
        <p>
          The system employs a convolutional neural network (CNN) to <span className="highlight1">recognize </span>
          and <span className="highlight1">classify</span> breast ultrasound
          images. Hosted on a dedicated server, the model processes uploaded
          images through an <span className="highlight3">intuitive front-end interface</span>,
          enabling doctors receive <span className="highlight1">instant</span> predictions and insights
          from their own ultrasound scans.
          This seamless integration allows for <span className="highlight4">quick</span> and <span className="highlight4">reliable</span> diagnostic support, helping doctors
          make <span className="highlight2">timely and informed decisions.</span>
        </p>
      </div>
      <div className='underline'></div>
      <div className='main-content-3'>
        <div className="main-content-left">
          <p>
            In the course of this thesis, a <span className="highlight1">comprehensive evaluation</span> was conducted involving the implementation
            and training of <span className="highlight2">three distinct convolutional neural networks</span> using the available ultrasound
            dataset. The primary objective was to identify the most effective algorithm based on strict performance metrics.
            Among the models tested, the <span className="highlight3">NASNet</span> architecture emerged as the superior
            performer, attaining an impressive accuracy of <span className="highlight4">90%</span>. This model not only demonstrated the highest
            accuracy but also excelled across various other performance metrics, solidifying its status as 
            <span className="highlight1"> the optimal choice for binary classification tasks.</span>
          </p>
        </div>
        <img src="./images/image3.svg" classname="medical" alt="" />
      </div>
      <div className='button-container'>
        <span></span>
        <a href="/app" className='button'>
          <button className='down-button'>Use the App Here</button>
        </a>
        <span></span>
      </div>
    </>
  )
}