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
                        'flex justify-between px-[2px] py-1 text-white text-[11px] font-bold',
                        props.isDark && 'text-muted-foreground',
                    )}
                >
                    <div className='text-den text-[1vw] leading-normal font-normal'>
                        {value[0]}
                        {prefixValue}
                    </div>
                    <div className='text-den text-[1vw] leading-normal font-normal'>
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
