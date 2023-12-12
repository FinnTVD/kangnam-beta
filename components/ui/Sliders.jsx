'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/utils/utils'

const Sliders = React.forwardRef(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn('relative flex w-full touch-none select-none items-center', className)}
        {...props}
    >
        <SliderPrimitive.Track
            className={cn(
                'relative h-[4px] w-full grow overflow-hidden rounded-full bg-gray-200/50 cursor-pointer',
                props.isDark && 'bg-[#00000014]',
            )}
        >
            <SliderPrimitive.Range className={cn('absolute h-full bg-[#d6a279]', props.isDark && 'bg-primary')} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
            className={cn(
                'block h-[0.75vw] w-[0.75vw] max-lg:h-[1.75vw] max-lg:w-[1.75vw] rounded-full border-2 border-secondary bg-[#d6a279] ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing',
                props.isDark && 'bg-white border-primary',
            )}
        />
        <SliderPrimitive.Thumb
            className={cn(
                'block h-[0.75vw] w-[0.75vw] max-lg:h-[1.75vw] max-lg:w-[1.75vw] rounded-full border-2 border-secondary bg-[#d6a279] ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing',
                props.isDark && 'bg-white border-primary',
            )}
        />
    </SliderPrimitive.Root>
))
Sliders.displayName = SliderPrimitive.Root.displayName

export { Sliders }
