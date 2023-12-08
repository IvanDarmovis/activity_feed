'use client';

import { useState } from 'react';
import ActivityImage from '../ActivityImage/ActivityImage';
import 'react-tooltip/dist/react-tooltip.css';
import Tooltip from '../Tooltip/Tolltip';
import { IActivityItem } from '@/app/types';

export default function ActivityItem({
  onRemove,
  data
}: {
  onRemove: () => void;
  data: IActivityItem;
}) {
  const [open, setOpen] = useState(false);

  const removeItem = () => {
    setOpen(false);
    onRemove();
  };

  const differenceInHours = (value: number) => {
    return Number((value / 1000 / 60 / 60).toFixed(0));
  };

  const getActivityDate = () => {
    const currentDate = new Date();

    const difference = differenceInHours(
      currentDate.getTime() - new Date(data.timeStamp).getTime()
    );

    if (difference >= 24) return (difference / 24).toFixed(0) + 'd';
    return difference + 'h';
  };
  return (
    <div className='flex w-full'>
      <div className='relative flex gap-3 w-[100px] justify-center pl-2'>
        <div className='absolute top-0 bottom-0 left-[70px] border-r border-gray-400'></div>
        <div className='mt-3'>
          <p>{getActivityDate()}</p>
        </div>

        <div className='relative rounded-full border border-gray-400 w-6 h-6 mt-3 bg-white'>
          <ActivityImage
            imageTitle={data.action}
            width={15}
            height={15}
            className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
          />
        </div>
      </div>
      <div className='flex-grow py-2'>
        <div className='bg-gray-200 rounded-md p-3 border border-gray-300 relative'>
          <p className='font-bold'>
            <span className='text-blue-500'>
              {data.author ? data.author : 'You'}
            </span>
            {data.action !== 'note' && data.action !== 'user' && (
              <span className='font-semibold'> had a {data.action} with </span>
            )}
            {data.action === 'note' && (
              <span className='font-semibold'> added a note to </span>
            )}
            {data.action === 'user' && (
              <span className='font-semibold'> had met </span>
            )}
            <span className='text-blue-500'>
              {data.contact ? data.contact : 'Milton Romaguera'}
            </span>
          </p>
          <p>{data.note}</p>
          <div className='absolute top-1/2 -translate-y-1/2 right-5'>
            <button id='remove' onClick={() => setOpen(!open)}>
              <ActivityImage
                imageTitle='arrow'
                width={15}
                height={15}
                className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-90'
              />
            </button>
            <Tooltip open={open} className='absolute top-6 -left-[51px]  '>
              <button onClick={removeItem}>Delete</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
