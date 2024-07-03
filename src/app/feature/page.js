// src/app/feature/page.js
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "../../styles/global.css";
import UploadImage from "../../../public/static/images/upload.png";
import eyeImage from "../../../public/static/images/eye.png";
import circleChartImage from "../../../public/static/images/circle-chart.png";

function handleFileUpload(file, previewId, imageId) {
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById(previewId).classList.remove("hidden");
    document.getElementById(imageId).src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function setupDropArea(dropAreaId, inputId, previewId, imageId) {
  const dropArea = document.getElementById(dropAreaId);
  const input = document.getElementById(inputId);

  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  dropArea.addEventListener("drop", handleDrop, false);
  input.addEventListener("change", handleInputChange, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const file = dt.files[0];
    handleFileUpload(file, previewId, imageId);
  }

  function handleInputChange() {
    const file = this.files[0];
    handleFileUpload(file, previewId, imageId);
  }
}

const Feature = () => {
  useEffect(() => {
    setupDropArea("eyeDropArea", "eyeUpload", "eyePreview", "eyePreviewImage");
    setupDropArea(
      "segmentedDropArea",
      "segmentedUpload",
      "segmentedPreview",
      "segmentedPreviewImage"
    );
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-grow">
          {/* Eye Image Upload Area */}
          <div className="gradient-bg rounded-lg p-4 mb-4">
            <div className="flex items-center mb-4">
              <div className="gradient-bg-reverse rounded-lg p-2 flex items-center">
                <Image
                  src={eyeImage}
                  alt="Eye"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-navy text-xl">Eye Image</span>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-ivory rounded-lg"
              id="eyeDropArea"
            >
              <Image
                src={UploadImage}
                alt="Upload"
                width={48}
                layout="fixed"
                className="mb-4"
              />

              <div className="text-ivory text-xl text-center mb-2">
                Drop Image Here
              </div>
              <div className="text-ivory text-xl text-center mb-2">- or -</div>
              <label
                htmlFor="eyeUpload"
                className="text-ivory text-xl text-center cursor-pointer hover:underline"
              >
                Click to Upload
              </label>
              <input
                type="file"
                id="eyeUpload"
                className="hidden"
                accept="image/*"
              />
            </div>
            <div id="eyePreview" className="mt-4 hidden">
              <img
                id="eyePreviewImage"
                src=""
                alt="Eye Image Preview"
                className="max-w-full max-h-full"
              />
            </div>
          </div>

          {/* Segmented Image Upload Area */}
          <div className="gradient-bg rounded-lg p-4 mb-4">
            <div className="flex items-center mb-4">
              <div className="gradient-bg-reverse rounded-lg p-2 flex items-center">
                <Image
                  src={circleChartImage}
                  alt="Circle chart"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-navy text-xl">Segmented Image</span>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-ivory rounded-lg"
              id="segmentedDropArea"
            >
              <Image
                src={UploadImage}
                alt="Upload"
                width={48}
                layout="fixed"
                className="mb-4"
              />

              <div className="text-ivory text-xl text-center mb-2">
                Drop Image Here
              </div>
              <div className="text-ivory text-xl text-center mb-2">- Or -</div>
              <label
                htmlFor="segmentedUpload"
                className="text-ivory text-xl text-center cursor-pointer hover:underline"
              >
                Click to Upload
              </label>
              <input
                type="file"
                id="segmentedUpload"
                className="hidden"
                accept="image/*"
              />
            </div>
            <div id="segmentedPreview" className="mt-4 hidden">
              <Image src="" alt="Segmented Image Preview" />
              {/* <img
                id="segmentedPreviewImage"
                src=""
                alt="Segmented Image Preview"
                className="max-w-full max-h-full"
              /> */}
            </div>
          </div>

          {/* Results Area */}
          <div className="gradient-bg rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-ivory text-xl mb-2">Stage</div>
                <div className="gradient-bg-reverse rounded-lg p-2 h-20"></div>
              </div>
              <div>
                <div className="text-ivory text-xl mb-2">Raw</div>
                <div className="gradient-bg-reverse rounded-lg p-2 mb-2"></div>
                <div className="text-ivory text-xl mb-2">Database</div>
                <div className="gradient-bg-reverse rounded-lg p-2"></div>
              </div>
              <div>
                <div className="text-ivory text-xl mb-2">Debug</div>
                <div className="gradient-bg-reverse rounded-lg p-2 h-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="gradient-bg rounded-lg p-4 lg:w-1/5">
          <div className="flex justify-between items-end h-full">
            <div className="gradient-bg-reverse rounded-lg p-2 flex items-center justify-center text-xl w-12 h-12">
              0
            </div>
            <div className="gradient-bg-reverse rounded-lg p-2 flex items-center justify-center text-xl w-12 h-12">
              0
            </div>
            <div className="gradient-bg-reverse rounded-lg p-2 flex items-center justify-center text-xl w-12 h-12">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
