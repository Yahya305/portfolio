// "use client"
// import useMediaQuery from '@lib/hooks/useMediaQuery';
import { cn } from '@lib/utils';
import React from 'react'

function Wrapper({
    className,
    children,
}: Readonly<{
    className?:string;
    children: React.ReactNode;
}>) {
    // const {isDesktop} =useMediaQuery();
  return (
    <div className={cn("xs:px-3 sm:px-[40px] lg:px-[100px] xl:px-[100px] 2xl:px-[180px] 3xl:px-[20vw]",className)}>
      {children}
    </div>
  )
}

export default Wrapper
