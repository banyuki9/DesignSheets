import React, { ReactNode, FC, ChangeEvent } from "react";

interface Props {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(event: ChangeEvent): void;
  children?: ReactNode;
  styles?: string
}

const Checkbox: FC<Props> = ({
  checked,
  defaultChecked,
  onChange = () => {},
  children,
  styles
}) => (
  <label className={`checkbox block ${styles}`}>
    <input
      type="checkbox"
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={(event) => onChange(event)}
      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
    />
    <span className="form-check-label inline-block text-gray-800 ml-1">
      {children}
    </span>
  </label>
);

export default Checkbox;
