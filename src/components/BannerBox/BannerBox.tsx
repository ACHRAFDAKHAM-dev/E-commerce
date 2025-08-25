import React from "react";
import { Link } from "react-router-dom";

type Props = {
  url: string;
};
const BannerBox: React.FC<Props> = (props: Props) => {
  return (
    <div className="BannerBox box overflow-hidden rounded-lg group">
      <Link to={"/"}>
        <img src={props.url} alt="banner" className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" />
      </Link>
    </div>
  );
};

export default BannerBox;
