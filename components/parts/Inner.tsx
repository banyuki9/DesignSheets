import {ReactNode} from 'react';

type InnerProps = {
  children: ReactNode,
}

const Inner: React.FC<InnerProps> = ({children}) => {
  return <div className="max-w-[1312px] px-7">{children}</div>;
}

export default Inner;