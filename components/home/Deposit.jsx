import Image from 'next/image'
import Button from '../general/Button'

export default function Deposit() {
    return (
        <section
            data-aos='fade-up'
            data-aos-duration='1000'
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
            <div className='w-[34.25vw] max-lg:w-[60vw] ml-[7.5vw] relative z-10 max-md:w-full max-lg:pl-[3.2vw] max-lg:mx-0 px-mb10'>
                <h2 className='text-white title56 title-mb25-700-130 title-tl38'>Kí gửi nhà đất</h2>
                <p className='title18-400-150 text-white mt-[1vw] mb-[2vw] max-md:mt-[2.13vw] title-mb14-400-150 max-md:mb-[6.4vw] title-tl16-400-150'>
                    Chúng tôi cung cấp dịch vụ kí gửi bất động sản, đáp ứng nhu cầu bán hoặc cho thuê tài sản của quý
                    khách.
                </p>
                <div className='flex gap-x-[1vw] max-md:gap-x-[4.27vw] max-lg:gap-x-[1.5vw] items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        className='w-[2vw] h-[2vw] max-lg:w-[4vw] max-lg:h-[4vw] max-md:w-[8vw] max-md:h-[8vw]'
                    >
                        <g clipPath='url(#clip0_546_2456)'>
                            <path
                                d='M7.1348 13.5115C9.81426 13.5115 11.9864 11.3393 11.9864 8.65988C11.9864 5.98042 9.81426 3.80829 7.1348 3.80829C4.45534 3.80829 2.2832 5.98042 2.2832 8.65988C2.2832 11.3393 4.45534 13.5115 7.1348 13.5115Z'
                                stroke='#E6B58F'
                                strokeWidth='1.2'
                                strokeMiterlimit='10'
                            />
                            <path
                                d='M13.2636 19.9416V18.1181C13.2636 15.9681 11.5207 14.2252 9.37071 14.2252H4.89876C2.74877 14.2252 1.00586 15.9681 1.00586 18.1181V23.821H8.80945M22.8905 18.8303H21.5947V15.7789C21.5947 14.0089 20.1598 12.5739 18.3897 12.5739C17.658 12.5739 17.0649 13.1671 17.0649 13.8988V17.0446L15.5648 18.8303L13.2797 19.9416V29.808L15.3849 31.0606H22.8906C24.6424 31.0606 26.0625 29.6405 26.0625 27.8887V22.0023C26.0625 20.2504 24.6423 18.8303 22.8905 18.8303Z'
                                stroke='#E6B58F'
                                strokeWidth='1.2'
                                strokeMiterlimit='10'
                            />
                            <path
                                d='M9.00684 19.9416H13.2796V29.8079H9.00684V19.9416Z'
                                stroke='#E6B58F'
                                strokeWidth='1.2'
                                strokeMiterlimit='10'
                            />
                            <path
                                d='M19.3282 8.00486C20.1166 6.3353 21.4605 4.99143 23.13 4.20302C21.4605 3.41462 20.1166 2.07075 19.3282 0.401184C18.5398 2.07077 17.1959 3.41464 15.5264 4.20302C17.196 4.99139 18.5398 6.33527 19.3282 8.00486ZM27.7308 14.744C26.9424 13.0745 25.5985 11.7306 23.9289 10.9422C25.5985 10.1538 26.9424 8.80993 27.7308 7.14036C28.5191 8.80994 29.863 10.1538 31.5326 10.9422C29.863 11.7306 28.5191 13.0744 27.7308 14.744Z'
                                stroke='#E6B58F'
                                strokeWidth='1.2'
                                strokeMiterlimit='10'
                                strokeLinejoin='bevel'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_546_2456'>
                                <rect
                                    width='32'
                                    height='32'
                                    fill='white'
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='title18-600-150 max-md:opacity-90 title-mb16-600-150 title-tl16-600-150'>
                        Đặt khách hàng làm trọng tâm
                    </span>
                </div>
                <div className='flex gap-x-[1vw] max-md:gap-x-[4.27vw] max-lg:gap-x-[1.5vw] max-lg:my-[1.75vw] items-center my-[1.25vw] max-md:my-[2.9vw]'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        className='w-[2vw] h-[2vw] max-lg:w-[4vw] max-lg:h-[4vw] max-md:w-[8vw] max-md:h-[8vw]'
                    >
                        <g clipPath='url(#clip0_665_6707)'>
                            <path
                                d='M18.7874 16.6252C18.7053 16.6252 18.6241 16.609 18.5482 16.5776C18.4724 16.5462 18.4035 16.5001 18.3454 16.442L13.2517 11.3483C13.1369 11.2306 13.0732 11.0724 13.0742 10.908C13.0753 10.7436 13.1411 10.5863 13.2573 10.47C13.3736 10.3538 13.5309 10.2881 13.6953 10.287C13.8597 10.286 14.0179 10.3498 14.1356 10.4645L18.9742 15.303L21.9924 14.4943C22.1526 14.4514 22.3232 14.4739 22.4667 14.5568C22.6103 14.6396 22.715 14.7762 22.7579 14.9363C22.8008 15.0964 22.7784 15.267 22.6955 15.4106C22.6126 15.5541 22.4761 15.6589 22.3159 15.7018L18.9491 16.6039C18.8963 16.618 18.842 16.6252 18.7874 16.6252Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M18.7875 29.2125C17.0404 29.2157 15.3102 28.8703 13.6983 28.1966C13.6214 28.1658 13.5514 28.12 13.4924 28.0618C13.4334 28.0037 13.3866 27.9344 13.3546 27.8581C13.3226 27.7817 13.3061 27.6997 13.3061 27.6169C13.306 27.5341 13.3224 27.4521 13.3544 27.3756C13.3863 27.2992 13.4331 27.2299 13.4921 27.1717C13.551 27.1136 13.6209 27.0677 13.6978 27.0368C13.7746 27.0059 13.8568 26.9905 13.9396 26.9917C14.0224 26.9928 14.1042 27.0104 14.1801 27.0434C16.5501 28.0329 19.1756 28.2335 21.6684 27.6157C24.1613 26.9978 26.3892 25.5943 28.0227 23.6125C29.6563 21.6307 30.6088 19.1759 30.7395 16.611C30.8702 14.046 30.1721 11.5071 28.7484 9.36955C27.3248 7.23199 25.2511 5.60924 22.834 4.74121C20.4169 3.87318 17.7846 3.80593 15.3263 4.54941C12.868 5.29289 10.7142 6.80763 9.18322 8.86971C7.65227 10.9318 6.82546 13.4317 6.82501 16C6.82501 16.1658 6.75916 16.3247 6.64195 16.4419C6.52474 16.5592 6.36577 16.625 6.20001 16.625C6.03425 16.625 5.87528 16.5592 5.75807 16.4419C5.64086 16.3247 5.57501 16.1658 5.57501 16C5.57501 13.3868 6.34991 10.8323 7.80172 8.65954C9.25353 6.48675 11.317 4.79328 13.7313 3.79325C16.1456 2.79323 18.8022 2.53158 21.3651 3.04139C23.9281 3.55119 26.2823 4.80956 28.1301 6.65736C29.9779 8.50516 31.2363 10.8594 31.7461 13.4224C32.2559 15.9853 31.9943 18.6419 30.9943 21.0562C29.9942 23.4705 28.3008 25.534 26.128 26.9858C23.9552 28.4376 21.4007 29.2125 18.7875 29.2125Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M18.7871 7.08748C18.6213 7.08748 18.4624 7.02163 18.3452 6.90442C18.228 6.78721 18.1621 6.62824 18.1621 6.46248V5.20523C18.1621 5.03947 18.228 4.8805 18.3452 4.76329C18.4624 4.64608 18.6213 4.58023 18.7871 4.58023C18.9529 4.58023 19.1118 4.64608 19.2291 4.76329C19.3463 4.8805 19.4121 5.03947 19.4121 5.20523V6.46248C19.4121 6.62824 19.3463 6.78721 19.2291 6.90442C19.1118 7.02163 18.9529 7.08748 18.7871 7.08748Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M14.0189 8.36596C13.9091 8.36607 13.8012 8.33724 13.7061 8.28238C13.6109 8.22752 13.5319 8.14856 13.477 8.05346L12.8483 6.96434C12.7667 6.82086 12.7452 6.65095 12.7884 6.49167C12.8317 6.3324 12.9362 6.19669 13.0791 6.11417C13.222 6.03164 13.3918 6.009 13.5514 6.05119C13.7109 6.09337 13.8473 6.19696 13.9308 6.33934L14.5595 7.42846C14.6144 7.52343 14.6432 7.63115 14.6433 7.7408C14.6433 7.85046 14.6145 7.95819 14.5597 8.05318C14.5049 8.14818 14.4261 8.22709 14.3312 8.28199C14.2363 8.33689 14.1286 8.36585 14.0189 8.36596Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M10.5271 11.8565C10.4174 11.8566 10.3095 11.8277 10.2146 11.7727L9.12548 11.1438C9.05382 11.103 8.99094 11.0485 8.94044 10.9834C8.88994 10.9183 8.85282 10.8438 8.83122 10.7642C8.80963 10.6847 8.80398 10.6016 8.8146 10.5199C8.82522 10.4382 8.85191 10.3593 8.89313 10.288C8.93434 10.2166 8.98926 10.1541 9.05474 10.104C9.12022 10.0539 9.19495 10.0173 9.27464 9.99622C9.35432 9.97516 9.43739 9.97006 9.51906 9.98123C9.60072 9.99239 9.67937 10.0196 9.75048 10.0613L10.8396 10.69C10.9589 10.7588 11.0521 10.865 11.1048 10.9921C11.1576 11.1193 11.1668 11.2603 11.1312 11.3933C11.0956 11.5262 11.0171 11.6437 10.9078 11.7275C10.7986 11.8113 10.6648 11.8566 10.5271 11.8565Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M9.25006 16.625H7.99243C7.82667 16.625 7.6677 16.5592 7.55049 16.4419C7.43328 16.3247 7.36743 16.1658 7.36743 16C7.36743 15.8342 7.43328 15.6753 7.55049 15.5581C7.6677 15.4408 7.82667 15.375 7.99243 15.375H9.25006C9.41582 15.375 9.57479 15.4408 9.692 15.5581C9.80921 15.6753 9.87506 15.8342 9.87506 16C9.87506 16.1658 9.80921 16.3247 9.692 16.4419C9.57479 16.5592 9.41582 16.625 9.25006 16.625Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M18.7871 27.4198C18.6213 27.4198 18.4624 27.3539 18.3452 27.2367C18.228 27.1195 18.1621 26.9605 18.1621 26.7948V25.5375C18.1621 25.3717 18.228 25.2128 18.3452 25.0956C18.4624 24.9784 18.6213 24.9125 18.7871 24.9125C18.9529 24.9125 19.1118 24.9784 19.2291 25.0956C19.3463 25.2128 19.4121 25.3717 19.4121 25.5375V26.795C19.412 26.9607 19.3462 27.1196 19.229 27.2368C19.1118 27.3539 18.9528 27.4198 18.7871 27.4198Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M24.185 25.9736C24.0752 25.9737 23.9673 25.9449 23.8722 25.8901C23.7771 25.8352 23.6981 25.7562 23.6432 25.6611L23.0144 24.572C22.9727 24.5009 22.9455 24.4223 22.9344 24.3406C22.9232 24.2589 22.9283 24.1759 22.9493 24.0962C22.9704 24.0165 23.007 23.9417 23.0571 23.8763C23.1072 23.8108 23.1697 23.7559 23.2411 23.7147C23.3125 23.6734 23.3913 23.6468 23.473 23.6361C23.5548 23.6255 23.6378 23.6312 23.7173 23.6528C23.7969 23.6744 23.8714 23.7115 23.9365 23.762C24.0017 23.8125 24.0562 23.8754 24.0969 23.947L24.7258 25.0361C24.7806 25.1311 24.8095 25.2388 24.8095 25.3485C24.8095 25.4582 24.7807 25.5659 24.7259 25.6609C24.6711 25.7559 24.5923 25.8348 24.4974 25.8897C24.4024 25.9446 24.2947 25.9735 24.185 25.9736Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M28.1354 22.0222C28.0259 22.0222 27.9183 21.9933 27.8235 21.9383L26.7344 21.3096C26.5909 21.2267 26.4861 21.0902 26.4432 20.9301C26.4003 20.7699 26.4227 20.5993 26.5056 20.4558C26.5885 20.3122 26.725 20.2074 26.8851 20.1645C27.0452 20.1216 27.2159 20.1441 27.3594 20.2269L28.4485 20.8558C28.5678 20.9246 28.661 21.0309 28.7137 21.1581C28.7664 21.2853 28.7756 21.4263 28.7399 21.5592C28.7042 21.6922 28.6256 21.8097 28.5163 21.8934C28.407 21.9771 28.2731 22.0224 28.1354 22.0222Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M29.5819 16.625H28.325C28.1593 16.625 28.0003 16.5592 27.8831 16.4419C27.7659 16.3247 27.7 16.1658 27.7 16C27.7 15.8342 27.7659 15.6753 27.8831 15.5581C28.0003 15.4408 28.1593 15.375 28.325 15.375H29.5825C29.7483 15.375 29.9072 15.4408 30.0245 15.5581C30.1417 15.6753 30.2075 15.8342 30.2075 16C30.2075 16.1658 30.1417 16.3247 30.0245 16.4419C29.9072 16.5592 29.7483 16.625 29.5825 16.625H29.5819Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M27.0472 11.8565C26.9096 11.8566 26.7757 11.8113 26.6665 11.7275C26.5573 11.6437 26.4787 11.5262 26.4431 11.3933C26.4075 11.2603 26.4168 11.1193 26.4695 10.9921C26.5222 10.865 26.6155 10.7588 26.7347 10.69L27.8238 10.0613C27.895 10.0196 27.9736 9.99239 28.0553 9.98123C28.1369 9.97006 28.22 9.97516 28.2997 9.99622C28.3794 10.0173 28.4541 10.0539 28.5196 10.104C28.5851 10.1541 28.64 10.2166 28.6812 10.288C28.7224 10.3593 28.7491 10.4382 28.7597 10.5199C28.7703 10.6016 28.7647 10.6847 28.7431 10.7642C28.7215 10.8438 28.6844 10.9183 28.6339 10.9834C28.5834 11.0485 28.5205 11.103 28.4488 11.1438L27.3597 11.7727C27.2648 11.8277 27.157 11.8566 27.0472 11.8565Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M23.5551 8.36596C23.4454 8.36585 23.3377 8.33689 23.2428 8.28199C23.1479 8.22709 23.0691 8.14818 23.0143 8.05318C22.9595 7.95819 22.9307 7.85046 22.9307 7.7408C22.9308 7.63115 22.9596 7.52343 23.0145 7.42846L23.6432 6.33934C23.7261 6.19577 23.8626 6.09101 24.0227 6.0481C24.1828 6.00519 24.3535 6.02764 24.497 6.11052C24.6406 6.1934 24.7453 6.32992 24.7883 6.49004C24.8312 6.65016 24.8087 6.82077 24.7258 6.96434L24.097 8.05346C24.0421 8.14856 23.9631 8.22752 23.8679 8.28238C23.7728 8.33724 23.6649 8.36607 23.5551 8.36596Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M10.3899 19.7758H6.40625C6.24049 19.7758 6.08152 19.7099 5.96431 19.5927C5.8471 19.4755 5.78125 19.3165 5.78125 19.1508C5.78125 18.985 5.8471 18.8261 5.96431 18.7088C6.08152 18.5916 6.24049 18.5258 6.40625 18.5258H10.3899C10.5556 18.5258 10.7146 18.5916 10.8318 18.7088C10.949 18.8261 11.0149 18.985 11.0149 19.1508C11.0149 19.3165 10.949 19.4755 10.8318 19.5927C10.7146 19.7099 10.5556 19.7758 10.3899 19.7758Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M10.3904 23.9434H3.86249C3.69673 23.9434 3.53776 23.8775 3.42055 23.7603C3.30334 23.6431 3.23749 23.4841 3.23749 23.3184C3.23749 23.1526 3.30334 22.9936 3.42055 22.8764C3.53776 22.7592 3.69673 22.6934 3.86249 22.6934H10.39C10.5557 22.6934 10.7147 22.7592 10.8319 22.8764C10.9491 22.9936 11.015 23.1526 11.015 23.3184C11.015 23.4841 10.9491 23.6431 10.8319 23.7603C10.7147 23.8775 10.5557 23.9434 10.39 23.9434H10.3904Z'
                                fill='#E6B58F'
                            />
                            <path
                                d='M10.3904 28.2446H0.625C0.459239 28.2446 0.300268 28.1788 0.183058 28.0616C0.065848 27.9444 0 27.7854 0 27.6196C0 27.4539 0.065848 27.2949 0.183058 27.1777C0.300268 27.0605 0.459239 26.9946 0.625 26.9946H10.3904C10.5561 26.9946 10.7151 27.0605 10.8323 27.1777C10.9495 27.2949 11.0154 27.4539 11.0154 27.6196C11.0154 27.7854 10.9495 27.9444 10.8323 28.0616C10.7151 28.1788 10.5561 28.2446 10.3904 28.2446Z'
                                fill='#E6B58F'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_665_6707'>
                                <rect
                                    width='32'
                                    height='32'
                                    fill='white'
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='title18-600-150 max-md:opacity-90 title-mb16-600-150 title-tl16-600-150'>
                        Đặt khách hàng làm trọng tâm
                    </span>
                </div>
                <div className='flex gap-x-[1vw] max-md:gap-x-[4.27vw] max-lg:gap-x-[1.5vw] items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        className='w-[2vw] h-[2vw] max-lg:w-[4vw] max-lg:h-[4vw] max-md:w-[8vw] max-md:h-[8vw]'
                    >
                        <path
                            d='M6.41629 17.5906C8.81165 17.5906 10.7535 15.6488 10.7535 13.2534C10.7535 10.8581 8.81165 8.91623 6.41629 8.91623C4.02093 8.91623 2.0791 10.8581 2.0791 13.2534C2.0791 15.6488 4.02093 17.5906 6.41629 17.5906Z'
                            stroke='#E6B58F'
                            strokeWidth='1.2'
                            strokeMiterlimit='10'
                        />
                        <path
                            d='M8.4155 18.2288H4.41769C2.49562 18.2288 0.9375 19.7869 0.9375 21.7089V26.8071H11.8957V21.7089C11.8957 19.7869 10.3376 18.2288 8.4155 18.2288Z'
                            stroke='#E6B58F'
                            strokeWidth='1.2'
                            strokeMiterlimit='10'
                        />
                        <path
                            d='M25.5835 17.5906C27.9788 17.5906 29.9207 15.6488 29.9207 13.2534C29.9207 10.8581 27.9788 8.91626 25.5835 8.91626C23.1881 8.91626 21.2463 10.8581 21.2463 13.2534C21.2463 15.6488 23.1881 17.5906 25.5835 17.5906Z'
                            stroke='#E6B58F'
                            strokeWidth='1.2'
                            strokeMiterlimit='10'
                        />
                        <path
                            d='M20.104 26.8071V21.7089C20.104 19.7869 21.6621 18.2288 23.5841 18.2288H27.582C29.504 18.2288 31.0621 19.7869 31.0621 21.7089V26.8071H20.104ZM20.104 26.8071H15.9996V14.6048M13.1787 7.2157L15.9745 10.032L20.7239 4.89157'
                            stroke='#E6B58F'
                            strokeWidth='1.2'
                            strokeMiterlimit='10'
                        />
                    </svg>
                    <span className='title18-600-150 max-md:opacity-90 title-mb16-600-150 title-tl16-600-150'>
                        Đặt khách hàng làm trọng tâm
                    </span>
                </div>
                <Button
                    className='bg-logo border-none text-white mt-[2.5vw] max-md:mt-[7.2vw]'
                    span='-tracking-[0.32px] font-semibold max-md:-tracking-[0.28px]'
                    icon='w-[1.2vw] h-[1.2vw]'
                    stroke='white'
                    href='/deposit'
                >
                    Đăng kí ngay
                </Button>
            </div>
        </section>
    )
}
