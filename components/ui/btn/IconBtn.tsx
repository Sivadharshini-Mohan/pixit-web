import Image from "next/image"
import { FC } from "react";

interface IconBtnProps {
  icon: any;
  txt: string;
  onClick?: () => void;
}
const IconBtn: FC<IconBtnProps> = (props) => {
  const { icon, txt, onClick } = props;
  return <div className="iconContainer" onClick={onClick}>
    <Image src={icon} alt="icon" />
    <p>{txt}</p>

    <style jsx>{`
     .iconContainer{
 padding:0 10px;
       font-family:'Poppins';
        cursor:pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: center;
        color: #00A16B;

      }`}</style>
  </div>
}
export default IconBtn;