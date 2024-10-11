// ImageUpload.jsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      
      // Generate a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      // You can handle the upload logic here
      // For example, uploading to a server or cloud storage
      onImageUpload(selectedImage);
      
      // Reset the input
      setSelectedImage(null);
      setPreviewSrc(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-md">
      <Label htmlFor="image-upload" className="mb-2 text-lg">
        Upload an Image
      </Label>
      <Input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {previewSrc && (
        <img
          src={previewSrc}
          alt="Preview"
          className="mb-4 w-48 h-48 object-cover rounded-md"
        />
      )}
      <Button
        onClick={handleUpload}
        disabled={!selectedImage}
        className={cn(
          'bg-blue-500 hover:bg-blue-600 text-white',
          !selectedImage && 'opacity-50 cursor-not-allowed'
        )}
      >
        {selectedImage ? 'Upload Image' : 'No Image Selected'}
      </Button>
    </div>
  );
};

export default ImageUpload;
