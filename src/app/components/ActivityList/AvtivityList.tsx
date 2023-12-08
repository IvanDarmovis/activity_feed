import { IActivityItem } from '@/app/types';
import ActivityItem from '../ActivityItem/ActivityItem';

export default function ActivityList({
  array,
  removeItem
}: {
  array: Array<IActivityItem>;
  removeItem: (idx: number) => void;
}) {
  return (
    <div>
      {array.map((el, idx) => (
        <ActivityItem key={idx} data={el} onRemove={() => removeItem(idx)} />
      ))}
    </div>
  );
}
