import VerifictionImg from '../assets/images/webp/verfication-img.png'

const Verification = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="lg:w-1/2 px-3">
                        <img src={VerifictionImg} alt="random cars or pizza img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verification