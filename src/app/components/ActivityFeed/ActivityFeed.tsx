'use client';

import { useEffect, useState } from 'react';
import ActivityList from '../ActivityList/AvtivityList';
import ActivitySetter from '../ActivitySetter/ActivitySetter';
import { IActivityItem } from '@/app/types';
import { author, contact, storageItem } from '@/app/constants';

export default function ActivityFeed() {
  const [activityArray, setActivityArray] = useState<Array<IActivityItem>>([]);

  useEffect(() => {
    const starterList = localStorage.getItem(storageItem);
    if (starterList) setActivityArray(JSON.parse(starterList));
  }, []);

  const updateActivityArray = (newItem: IActivityItem) => {
    const newArray = [{ ...newItem, author, contact }, ...activityArray];
    setActivityArray(newArray);
    localStorage.setItem(storageItem, JSON.stringify(newArray));
  };

  const removeFromActivityArray = (idx: number) => {
    const newArray = activityArray.filter((el, index) => index !== idx);
    setActivityArray(newArray);
    localStorage.setItem(storageItem, JSON.stringify(newArray));
  };

  return (
    <div>
      <ActivitySetter onSubmit={updateActivityArray} />
      <ActivityList
        array={activityArray}
        removeItem={removeFromActivityArray}
      />
    </div>
  );
}
