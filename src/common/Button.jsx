const CommonButton = ({ text, className, onClick, href }) => {
    const buttonClasses = `font-normal text-lg leading-7 rounded-full shadow-3xl text-white bg-textBlue hover:text-black px-6 py-2 sm:py-[14px] h-[50px] sm:h-[55px] hover:bg-white border border-white hover:border-black duration-300 ease-linear cursor-pointer shadow-buttonShdow flex items-center justify-center w-fit ${className}`;
    return (
        <a
            href={href}
            onClick={onClick}
            className={buttonClasses}
        >
            {text}
        </a>
    );
};

export default CommonButton;
