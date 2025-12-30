import React from 'react';
import axios from 'axios';

function ImageUpload() {
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        
        if (!file) return;
        
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "saad_cloudinary");
        formData.append("cloud_name", "dopwcmend");
        
        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dopwcmend/image/upload",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            
            console.log('Upload successful:', response.data);
            // You can handle the response data here
            // For example: setImageUrl(response.data.secure_url);
            
        } catch (error) {
            console.error('Upload failed:', error);
            // Handle error appropriately
        }
    };

    return (
        <div className="file-upload">
            <div className="upload-container">
                <div className="upload-icon">
                    <img src="upload.svg" alt="" />
                </div>
                <input
                    type="file"
                    className="file-input"
                    onChange={handleFileUpload}
                />
            </div>
        </div>
    );
}

export default ImageUpload;