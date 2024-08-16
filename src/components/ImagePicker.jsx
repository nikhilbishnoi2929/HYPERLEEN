import React, { useState, useEffect } from "react";
import imagePicker from '../assets/images/webp/image-picker.webp';
import CommonButton from "../common/Button";
import { PenIcon } from "../common/Icon";

const ImagePicker = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        let timer;
        if (showPopup) {
            timer = setTimeout(() => {
                setShowPopup(false);
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [showPopup]);

    const handleFileChange = (event) => {
        const { files } = event.target;

        if (files && files[0]) {
            const reader = new FileReader();

            reader.onloadstart = () => setLoading(true);

            reader.onload = (event) => {
                setData(event.target.result);
                setLoading(false);
                setFileName(files[0].name);
            };

            reader.readAsDataURL(files[0]);
        }
    };

    const handleClearClick = () => {
        setData(null);
        setError(null);
        setShowPopup(false);
        setFileName('');
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

            <div className="relative w-full h-[200px] bg-[#F2F2F2] rounded-xl overflow-hidden p-4 sm:p-5">
                <div className="w-full h-full bg-white rounded-xl">
                    {!data && !loading && (
                        <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-xl">
                            <img src={imagePicker} className="cursor-pointer w-full h-full" onClick={handleFileInputClick} alt="imagePicker" />
                        </div>
                    )}

                    {loading && (
                        <div className="flex items-center justify-center w-full h-full">
                            <span>Loading...</span>
                        </div>
                    )}

                    {data && !loading && (
                        <div className="w-full h-full">
                            <img
                                src={data}
                                alt="Selected"
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </div>
                    )}
                </div>
            </div>

            {error && (
                <div className="mt-2 text-red-500 text-center">
                    {error}
                </div>
            )}

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center max-w-[90%] sm:max-w-[400px]">
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
                <div className='border p-4 rounded-lg border-grey mt-4 mb-9 border-gray'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <span className='text-black opacity-40 m-0 flex-grow w-fit'>{fileName || 'Car...'}</span>
                        </div>
                        <PenIcon />
                    </div>
                </div>
                <div className="flex space-x-3">
                    <CommonButton
                        type="button"
                        onClick={handleOkClick}
                        className="!max-w-[203px] !w-full h-[55px] px-6 py-3 bg-[#084CAF] text-white rounded-[100px] opacity-100 shadow-[4px_4px_20px_rgba(8,76,175,0.3)]"
                        text={"OK"}
                    />
                    <button
                        type="button"
                        onClick={handleClearClick}
                        className="w-[203px] h-[55px] px-6 py-3 text-black border-[1px] border-solid border-black rounded-[100px] hover:bg-blue hover:text-white hover:border-transparent duration-300 ease-linear"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImagePicker;
