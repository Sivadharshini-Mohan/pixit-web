import Image from "next/image";
import add from "./../../../public/assets/images/add.png";

const NewProjectCard = () => {
    return <div className="container" >
        <div className="center">
            <Image src={add} alt="add" className="add" />
            <h3 className="addProject">Add Project</h3>
            <p className="content">List your project here</p>
        </div>
        <style jsx>{`
        .container{
    width: 85%;
height: 60%;
border-radius: 12px;
gap: 2px;
border-width: 1px;
padding: 24px;
background: #F1F9F1;
border: 2px dashed #00A16B;
margin: 15px;
}

.center{
  height: 150px;
 display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}

.add{
    margin: 5px;
}
.addProject{
 
font-weight: 500;
font-size: 16px;
line-height: 26px;
letter-spacing: 0px;
color: #00A16B;

}
.content{
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0px;
text-align: center;
color:  #64748B;

}
        `}</style>
    </div>
}

export default NewProjectCard;