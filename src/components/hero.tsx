
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-full min-h-screen flex items-center'>
        <div className='w-[50%] h-[540px]  pl-[190px]'>
            <h1 className='text-[35px] font-bold ml-7'>INCREDIBLE CRAFTMANSHIP AND FINESE</h1>
            <p className=' text-[#787054] text-[20px] mt-8 ml-7 leading-10 '>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection</p>
            <button className='w-[230px] h-[40px] bg-[#A29875] text-white rounded-lg mt-4 ml-7'>Explore Now</button>
        </div>
        <div className='w-[50%] h-[440px] mb-[120px]'>
            <div className='w-[380px] h-[540px] mb-9 rounded-tl-3xl ml-8'>
                <Image src="/images/hero.png" alt='' width={380} height={440} className='rounded-tl-[30%] rounded-br-[30%]'>

                </Image>
            </div>
        </div>
    </div>
  )
}

export default Hero