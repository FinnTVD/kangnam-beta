import Image from 'next/image'
import Button from '../general/Button'
import IconDeposit1 from '../icons/IconDeposit1'
import IconDeposit2 from '../icons/IconDeposit2'
import IconDeposit3 from '../icons/IconDeposit3'

export default function Deposit({ lang }) {
    return (
        <section
            // data-aos='fade-up'
            // data-aos-duration='1000'
            id='deposit'
            className='relative h-fit pt-[8.44vw] pb-[7vw] max-md:pt-[13.33vw] max-lg:h-[55vh] max-md:h-screen'
        >
            <Image
                className='z-0 object-cover max-md:hidden'
                src='/images/bg-deposit.jpg'
                alt='bg-deposit'
                sizes='100vw'
                fill
                quality={100}
            />
            <Image
                className='z-0 object-cover md:hidden'
                src='/images/bg-deposit-res.jpg'
                alt='bg-deposit'
                sizes='100vw'
                fill
                quality={100}
            />
            <div
                data-aos='fade-right'
                data-aos-duration='1000'
                className='w-[34.25vw] max-lg:w-[60vw] ml-[7.5vw] relative z-10 max-md:w-full max-lg:pl-[3.2vw] max-lg:mx-0 px-mb10'
            >
                <h2 className='text-white title56 title-mb25-700-130 title-tl38'>Kí gửi nhà đất</h2>
                <p className='title18-400-150 text-white mt-[1vw] mb-[2vw] max-md:mt-[2.13vw] title-mb14-400-150 max-md:mb-[6.4vw] title-tl16-400-150 opacity-80'>
                    Chúng tôi cung cấp dịch vụ kí gửi bất động sản, đáp ứng nhu cầu bán hoặc cho thuê tài sản của quý
                    khách.
                </p>
                <div className='flex gap-x-[1vw] max-md:gap-x-[4.27vw] max-lg:gap-x-[1.5vw] items-center'>
                    <IconDeposit1 className='w-[2vw] h-[2vw] max-lg:w-[4vw] max-lg:h-[4vw] max-md:w-[8vw] max-md:h-[8vw]' />
                    <span className='title18-600-150 max-md:opacity-90 title-mb16-600-150 title-tl16-600-150 opacity-90'>
                        Đặt khách hàng làm trọng tâm
                    </span>
                </div>
                <div className='flex gap-x-[1vw] max-md:gap-x-[4.27vw] max-lg:gap-x-[1.5vw] max-lg:my-[1.75vw] items-center my-[1.25vw] max-md:my-[2.9vw]'>
                    <IconDeposit2 className='w-[2vw] h-[2vw] max-lg:w-[4vw] max-lg:h-[4vw] max-md:w-[8vw] max-md:h-[8vw]' />
                    <span className='title18-600-150 max-md:opacity-90 title-mb16-600-150 title-tl16-600-150 opacity-90'>
                        Dịch vụ nhanh chóng
                    </span>
                </div>
                <div className='flex gap-x-[1vw] max-md:gap-x-[4.27vw] max-lg:gap-x-[1.5vw] items-center'>
                    <IconDeposit3 className='w-[2vw] h-[2vw] max-lg:w-[4vw] max-lg:h-[4vw] max-md:w-[8vw] max-md:h-[8vw]' />
                    <span className='title18-600-150 max-md:opacity-90 title-mb16-600-150 title-tl16-600-150 opacity-90'>
                        Đảm bảo thực thi
                    </span>
                </div>
                <Button
                    className='bg-logo border-none text-white mt-[2.5vw] max-md:mt-[7.2vw]'
                    span='-tracking-[0.32px] font-semibold max-md:-tracking-[0.28px]'
                    icon='w-[1.2vw] h-[1.2vw]'
                    stroke='white'
                    href={'/' + lang + '/deposit'}
                >
                    Đăng kí ngay
                </Button>
            </div>
        </section>
    )
}
