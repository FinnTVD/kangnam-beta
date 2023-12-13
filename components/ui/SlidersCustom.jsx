'use client'

import { Sliders } from './Sliders'
import { cn } from '@/utils/utils'

export function SlidersCustom({
    isShowValue = false,
    prefixValue = '',
    className,
    handleValueChange,
    value,
    ...props
}) {
    return (
        <div className={className}>
            {isShowValue && (
                <div
                    className={cn(
                        'flex justify-between px-[2px] py-1 max-lg:pb-[1.25rem] text-white font-bold',
                        props.isDark && 'text-muted-foreground',
                    )}
                >
                    <div className='text-den text-[1vw] max-lg:text-[2vw] leading-normal font-normal max-sm:text-[4rem]'>
                        {value[0]}
                        {prefixValue}
                    </div>
                    <div className='text-den text-[1vw] max-lg:text-[2vw] leading-normal font-normal max-sm:text-[4rem]'>
                        {value[1]}
                        {prefixValue}
                    </div>
                </div>
            )}
            <Sliders
                value={value}
                onValueChange={handleValueChange}
                {...props}
            />
        </div>
    )
}
