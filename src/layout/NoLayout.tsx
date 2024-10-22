//module.export = function no layout ( ini kalo di backend)
import React from 'react';

export default function NoLayout({ children }: {children:React.ReactNode}) {
  return (
    <>
    {children}
    </>
  )
}
