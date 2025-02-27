import Image from "next/image";
import file from "./../../../public/assets/images/file.svg";
import link from "./../../../public/assets/images/link.svg";
import profile from "./../../../public/assets/images/profile.svg";

interface ProjectCardProps{
    projectName: string;
    memberName: string;
    memberRole: string;
    
}

const ProjectCard = (props:ProjectCardProps)=>{
    const {projectName,memberName,memberRole}=props;
    return <div className="projectContainer" >
        <div className="link">
            <Image src={link} alt="link-icon"/>
        </div>

        <Image src={file} alt="file-icon"/>
        <h3 className="projectName">{projectName}</h3>
        <div className="memberDetails">
            <Image src={profile} alt="profile"/>
            <div className="memberData">
                <p className="memberName">{memberName}</p>
                <p className="memberRole">{memberRole}</p>
            </div>
        </div>
        <style jsx>{`
            .projectContainer{
                   width: 85%;
height: 60%;
                border-radius: 12px;
                gap: 2px;
                padding: 20px;
                background: #FFFFFF;
                box-shadow: 0px 4px 4px 0px #0F172A0A;
                margin: 15px;
            }

            .link{
                display: flex;
                align-items: center;
                justify-content: end;
                cursor: pointer;
            }
            .projectName{
                font-weight: 500;
                font-size: 18px;
                line-height: 28px;
                letter-spacing: 0%;
                color: #1B3B59;
                margin: 15px 0;


            }
.memberDetails{
display: flex;
    gap: 6px;
    align-items: center;
    margin: 15px 0;

}
.memberRole{
font-weight: 500;
font-size: 13px;
line-height: 20px;
letter-spacing: 0px;
color: var(--Text-text-light, #94A3B8);


}
.memberName{
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0px;
    color: #1B3B59;
    
}`}</style>
    </div>
}

export default ProjectCard;