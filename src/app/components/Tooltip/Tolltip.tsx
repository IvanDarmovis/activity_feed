import { ReactNode } from 'react';

export default function Tooltip({
  children,
  open,
  className
}: {
  children: ReactNode;
  open: boolean;
  className?: string;
}) {
  return (
    <>
      {open && (
        <div
          className={`bg-white px-2 py-1 absolute border border-blue-200 rounded-md ${className}`}
        >
          <div className='bg-white absolute w-3 h-3 -top-[7px] right-2 rotate-45 border-t border-l border-blue-200'></div>
          {children}
        </div>
      )}
    </>
  );
}
