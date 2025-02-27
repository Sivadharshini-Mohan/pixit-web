import React from "react";
import add from "./../../../public/assets/images/add.svg";
import AddMore from "../btn/IconBtn";
import Actions from "../btn/Actions";
import Header from "./Header";

interface AddMemberProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddMember: React.FC<AddMemberProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="dialogOverlay">
      <div className="container gap">
       <Header heading="Add New Member" onClose={onClose}/>
        <form >
          <div className="memberContainer gap">
            <div className="details">
            <input type="text" id="memberName" placeholder="Member Name" required className="txtBox"/>
            <input type="email" id="memberEmail" placeholder="Member Email ID" required className="txtBox"/>
            </div>
           <AddMore icon={add} txt={"Add More"}/>
          </div>

         <Actions primaryBtn="Add Member" secondaryBtn="Cancel" onClose={onClose}/>
        </form>
      </div>
      <style jsx>
      {`.container{
        width: 656;
        height: 254;
        top: 326px;
        left: 392px;
        border-radius: 12px;
        gap: 10px;
        padding: 24px;
        background:#FFF;
      }

      .gap{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      
      .charValidation{
        font-weight: 500;
        font-size: 12px;
        color: var(--Text-text-info-dark, #64748B);
        display:flex;
        justify-content: flex-end;
      }

      .details{
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }

      .memberContainer{
        margin-top: 15px;
      }

    `}
      </style>
    </div>
  );
};

export default AddMember;