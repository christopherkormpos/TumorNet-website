import React, { useState, useEffect } from 'react';
import '../application.css'

export function Application() {
  const [base64Image, setBase64Image] = useState('');
  const [prediction, setPrediction] = useState(null); // Initialize as null
  const [selectedImage, setSelectedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false); // New state for prediction loading

  const handleImageChange = () => {
    setIsLoading(true);
    setPrediction(null); // Clear previous prediction when a new image is selected
    const reader = new FileReader();
    reader.onload = function (e) {
      const dataURL = reader.result;
      const base64 = dataURL.replace("data:image/png;base64,", "");
      setSelectedImage(dataURL); // Update selectedImage state with dataURL
      setBase64Image(base64);
      console.log(base64);
      setTimeout(() => {
        setIsLoading(false);
        const imageSelectedElement = document.getElementById('predict-button');
        if (imageSelectedElement) {
          const { top } = imageSelectedElement.getBoundingClientRect();
          window.scrollTo({
            top: window.scrollY + top,
            behavior: 'smooth'
          });
        }
      }, 3000);
    };

    if (document.getElementById('image-selector').files.length > 0) {
      reader.readAsDataURL(document.getElementById('image-selector').files[0]);
    }
  };

  useEffect(() => {
    document.getElementById('image-selector').addEventListener('change', handleImageChange);

    return () => {
      document.getElementById('image-selector').removeEventListener('change', handleImageChange);
    };
  }, []);

  const handlePrediction = () => {
    setIsPredicting(true); // Set predicting state to true
    let message = {
      image: base64Image
    };

    console.log(message);

    fetch("http://127.0.0.1:5000/predict", {
      method: 'POST',
      body: JSON.stringify(message),
    })
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setPrediction(data.prediction);
          console.log(data);
          setIsPredicting(false); // Set predicting state to false after showing loader for at least 3 seconds
        }, 3000);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsPredicting(false); // Ensure to set predicting state to false in case of error
      });
  };

  return (
    <div>
      <div className='upper'>
        <div className='input'>
          <input
            type="file"
            id="image-selector"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div id="prediction">
        <div className='image-loader'>
          {isLoading && <div className="loader"></div>}
          {(selectedImage && !isLoading) && <img src={selectedImage} alt="Selected" />}
        </div>
        {(selectedImage && !isLoading) &&
          <div className='button'>
            <button className='predict-button' id="predict-button" onClick={handlePrediction}>
              <span>
                Predict
              </span>
            </button>
          </div>
        }
        <div className='prediction-loader-div'>
          {isPredicting && <div className="prediction-loader"></div>}
        </div>
        {(!isPredicting && prediction) && (
          <div>
            <div id="malignant-prediction">Malignant: {prediction.malignant.toFixed(6)}</div>
            <div id="normal-prediction">Normal: {prediction.benign.toFixed(6)}</div>
            <div id="benign-prediction">Benign: {prediction.normal.toFixed(6)}</div>
          </div>
        )}
      </div>
    </div>
  );
}