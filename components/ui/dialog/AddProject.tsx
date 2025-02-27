import React from "react";
import close from "./../../../public/assets/images/close.svg";
import add from "./../../../public/assets/images/add.svg";
import Image from "next/image";
import IconBtn from "../btn/IconBtn";
import Actions from "../btn/Actions";
import Header from "./Header";


interface AddProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProject: React.FC<AddProjectProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="dialogOverlay">
      <div className="container gap">
        <Header heading="Add New Project" onClose={onClose}/>
        <p className="subHeading">
        Add your project details to get started
        </p>

        <form >
          <div className="titleContainer gap">
            <label htmlFor="title" className="formLabel">Title*</label>
            <input type="text" id="title" placeholder="Project Title" required className="txtBox"/>
            <p className="charValidation">characters left 0/32</p>
          </div>
          <div className="pmContainer gap">
            <label htmlFor="pm" className="formLabel">Project Manager Details*</label>
            <div className="details">
            <input type="text" id="pmName" placeholder="Manager Name" required className="txtBox"/>
            <input type="email" id="pmEmail" placeholder="Manager Email ID" required className="txtBox"/>
            </div>
          </div>

          <div className="memberContainer gap">
            <label htmlFor="member" className="formLabel">Add Members*</label>
            <div className="details">
            <input type="text" id="memberName" placeholder="Member Name" required className="txtBox"/>
            <input type="email" id="memberEmail" placeholder="Member Email ID" required className="txtBox"/>
            </div>
            <div className="details">
            <input type="text" id="memberName" placeholder="Member Name" required className="txtBox"/>
            <input type="email" id="memberEmail" placeholder="Member Email ID" required className="txtBox"/>
            </div>
            <div className="details">
            <input type="text" id="memberName" placeholder="Member Name" required className="txtBox"/>
            <input type="email" id="memberEmail" placeholder="Member Email ID" required className="txtBox"/>
            </div>

            <IconBtn icon={add} txt="Add More"/>
          </div>

          <Actions primaryBtn="Add Project" secondaryBtn="Cancel" onClose={onClose}/>
        </form>
      </div>
      <style jsx>
      {`
      .container{
        width: 500px;
        height: 500px;
        border-radius: 12px;
        padding: 24px;
        background: #FFFFFF;
      }
    
      .subHeading{
        font-weight: 400;
        font-size: 14px;
        color: #1B3B59;
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

export default AddProject;
