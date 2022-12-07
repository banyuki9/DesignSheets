import { ReactNode } from "react";

type EditListItemProps = {
  styles?: string;
  children?: ReactNode;
  text: string,
  editFunction: Function
};

const EditListItem: React.FC<EditListItemProps> = ({ styles, children, text, editFunction }) => {
  const clickHandler = () => editFunction();
  return (
    <li
      className={`${styles} flex cursor-pointer mb-7 hover:text-gray-600`}
      onClick={clickHandler}
    >
      <div className="mr-4">{children}</div>
      {text}
    </li>
  );
};

export default EditListItem;
