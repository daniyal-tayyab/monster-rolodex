import { ChangeEvent, ChangeEventHandler } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // we can also write the function in upper line in manual way like for some reason if we want to return something else
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
