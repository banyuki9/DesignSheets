import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-common text-black">
      {children}
    </div>
  )
}

export default Layout;