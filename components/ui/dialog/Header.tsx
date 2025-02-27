import Image from "next/image";
import close from "./../../../public/assets/images/close.svg";

interface HeaderProps{
    heading: string;
    onClose:any;
}
const Header=(props:HeaderProps)=>{
    const {heading, onClose}=props;
    return <div className="header">
    <h3 className="heading">{heading}</h3>
    <div className="closeBtn">
      <Image src={close} alt="close" onClick={onClose} />
    </div>
    <style jsx>{`
         .header{
        display: flex;
        justify-content: space-between;
      }

      .heading{
        font-weight: 600;
        font-size: 24px;
        color: #0F172A;
      }
`}</style>
  </div>
};
export default Header;
