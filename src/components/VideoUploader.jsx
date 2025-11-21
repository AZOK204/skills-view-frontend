import React, { useRef } from "react";

const VideoUploader = () => {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle file upload logic here
      console.log("File selected:", files[0]);
    }
  };

  return (
    <div
      className="scale-90 w-full h-60 border-2 border-dashed rounded-xl px-6 py-11"
      style={{
        borderColor: "#4B5563",
        backgroundColor: "#1F2937CC",
        borderDasharray: "6,4",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full gap-2">
        {/* Main Title */}
        <h2 className="text-gray-text font-spline font-normal leading-[22.5px] tracking-[-0.27px]">
          Importer une vidéo
        </h2>

        {/* Secondary Description */}
        <p className="text-sm text-gray-light max-w-[405px] font-spline font-normal text-center leading-[21px] ">
          Glissez-déposez un fichier ici ou parcourez vos fichiers. Formats
          supportés: MP4, MOV.
        </p>

        {/* Upload Button */}
        <button
          onClick={handleBrowseClick}
          className="cursor-pointer w-44 h-10 bg-primary text-dark rounded-lg px-3.5 font-spline text-sm leading-[21px] mt-3 "
        >
          Parcourir les fichiers
        </button>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="video/mp4,video/quicktime"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default VideoUploader;
