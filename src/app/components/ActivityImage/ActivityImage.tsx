import Beer from '/public/icon/beer.svg';
import Coffee from '/public/icon/coffee.svg';
import List from '/public/icon/list.svg';
import Message from '/public/icon/message.svg';
import Phone from '/public/icon/phone.svg';
import User from '/public/icon/user.svg';
import Arrow from '/public/icon/arrow-short.svg';

export default function ActivityImage({
  imageTitle,
  ...rest
}: {
  imageTitle: string;
  height: number;
  width: number;
  fill?: string;
  stroke?: string;
  className?: string;
}) {
  return (
    <>
      {imageTitle === 'beer' && <Beer {...rest} />}
      {imageTitle === 'coffee' && <Coffee {...rest} />}
      {imageTitle === 'list' && <List {...rest} />}
      {imageTitle === 'note' && <Message {...rest} />}
      {imageTitle === 'call' && <Phone {...rest} />}
      {imageTitle === 'user' && <User {...rest} />}
      {imageTitle === 'arrow' && <Arrow {...rest} />}
    </>
  );
}
