'use client';
import { ChangeEvent, useState } from 'react';
import ActivityImage from '../ActivityImage/ActivityImage';
import { IActivityItem } from '@/app/types';
import { actionImageList } from '@/app/constants';

export default function ActivitySetter({
  onSubmit
}: {
  onSubmit: (item: IActivityItem) => void;
}) {
  const [note, setNote] = useState('');
  const [expand, setExpand] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void =>
    setNote(e.target.value);

  const expandInput = () => setExpand(true);

  const onSubmitClick = () => {
    const item = {
      note,
      action: actionImageList[activeButton],
      timeStamp: new Date()
    };
    onSubmit(item);
    setExpand(false);
    setNote('');
  };

  return (
    <div className='flex relative justify-center items-center '>
      <div className='absolute w-[100px] top-0 bottom-0 left-0 min-h-full'>
        <div className='absolute top-0 bottom-0 left-0 w-[71px] border-r border-gray-400'></div>
        <div className='absolute rounded-full w-6 h-6 border border-gray-600 p-[2px] bg-white right-[7px] top-1/3 -translate-y-1/2 -translate-x-1/2'>
          <ActivityImage
            imageTitle='list'
            width={15}
            height={15}
            className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
          />
        </div>
      </div>
      <div className='ml-[100px] py-2'>
        <div className='bg-gray-200 p-[4px] rounded-md border border-gray-300 '>
          <div>
            <textarea
              value={note}
              onInput={onInputChange}
              rows={expand ? 3 : 1}
              cols={50}
              onFocus={expandInput}
              className='resize-none m-0 p-2 outline-none border border-gray-400'
            />
          </div>
          <div className='flex justify-between p-2 items-center'>
            <div className='flex gap-1'>
              {actionImageList.map((el, idx) => (
                <button
                  key={idx}
                  className={`relative w-6 h-6 rounded-full border border-gray-400 p-[4px] ${
                    activeButton === idx ? 'bg-blue-400 text-white' : ''
                  }`}
                  onClick={() => setActiveButton(idx)}
                >
                  <ActivityImage
                    imageTitle={el}
                    width={15}
                    height={15}
                    fill={activeButton === idx ? 'white' : 'black'}
                    className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
                  />
                </button>
              ))}
            </div>
            <button
              className='text-white bg-blue-400 p-[6px] rounded-md'
              onClick={onSubmitClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
