"use client"
import React, { useState } from 'react';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://127.0.0.1:8000/upload/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const videoBlob = await response.blob();
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again later.');
    }
  };

  const handleDownload = () => {
    if (!selectedFile) {
      alert('No file uploaded.');
      return;
    }
    const url = window.URL.createObjectURL(selectedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedFile.name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={handleFileSelect} className="upload-input" />
      <button onClick={handleUpload} className="upload-button">Upload</button>
      {videoUrl && (
        <div>
          <video controls src={videoUrl} className="uploaded-video" />
          <button onClick={handleDownload} className="download-button">Download</button>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;



