import React, { useState, useEffect } from "react";
import imagePicker from '../assets/images/webp/image-picker.png';

const ImagePicker = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        let timer;
        if (showPopup) {
            timer = setTimeout(() => {
                setShowPopup(false);
            }, 2000); // Hide the popup after 2 seconds
        }

        return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }, [showPopup]);

    const handleFileChange = (event) => {
        const { files } = event.target;

        if (files && files[0]) {
            const reader = new FileReader();

            reader.onloadstart = () => setLoading(true);

            reader.onload = (event) => {
                setData(event.target.result);
                setLoading(false);
            };

            reader.readAsDataURL(files[0]);
        }
    };

    const handleClearClick = () => {
        setData(null);
        setError(null);
        setShowPopup(false);
    };

    const handleFileInputClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleOkClick = () => {
        if (data) {
            setShowPopup(true);
            setError(null);
        } else {
            setError('Please select an image first.');
            setShowPopup(false);
        }
    };

    return (
        <div className="relative pt-5 max-w-[1440px] mx-auto">
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                capture="camera"
                onChange={handleFileChange}
                className="hidden"
            />

            <div
                className="relative w-full h-[200px] bg-[#F2F2F2] rounded-xl overflow-hidden p-5"
            >
                {!data && !loading && (
                    <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-xl">
                        <img src={imagePicker} className="cursor-pointer" onClick={handleFileInputClick} alt="imagePicker" />
                    </div>
                )}

                {loading && (
                    <div className="flex items-center justify-center w-full h-full">
                        <span>Loading...</span>
                    </div>
                )}

                {data && !loading && (
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src={data}
                            alt="Selected"
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}
            </div>

            {error && (
                <div className="mt-2 text-red-500 text-center">
                    {error}
                </div>
            )}

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                        <svg
                            className="w-12 h-12 text-green-500 mr-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className="text-xl">Image fetched successfully!</span>
                    </div>
                </div>
            )}

            <div>
                <input
                    type="text"
                    placeholder="Car."
                    className="h-[81px] w-full px-4 py-3 border-solid border-[0.5px] outline-none border-[#4E4E4E] mt-5 mb-9 rounded-[12px]"
                />

                <div className="flex space-x-3">
                    <button
                        type="button"
                        onClick={handleOkClick}
                        className="w-[203px] h-[55px] px-6 py-3 bg-[#084CAF] text-white rounded-[100px] opacity-100 shadow-[4px_4px_20px_rgba(8,76,175,0.3)]"
                    >
                        OK
                    </button>
                    <button
                        type="button"
                        onClick={handleClearClick}
                        className="w-[203px] h-[55px] px-6 py-3 text-black border-[1px] border-solid border-black rounded-[100px]"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImagePicker;
