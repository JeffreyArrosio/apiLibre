import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function Loading() {

    const loadImg = [
        "/images/mh_bbq.gif",
        "/images/mh_bbq2.gif",
        "/images/mh_bbq3.gif",
        "/images/mh_bbq4.gif",
        "/images/mh_bbq5.gif",
        "/images/mh_bbq6.gif",
        "/images/mh_bbq7.gif",
    ]

    const randImg = loadImg[Math.floor(Math.random() * 7)]

    return (
        <div>
            <div className='flex justify-center mt-10'>
                <img src={randImg} alt="" className='h-125' />
            </div>
            <div className='flex justify-center content-center'>
                <DotLottieReact
                    className='h-100'
                    src="https://lottie.host/3acd9112-066e-410d-bcaa-9f4aeb213258/3YxKxODuZI.lottie"
                    loop
                    autoplay
                />
            </div>
        </div>

    )
}