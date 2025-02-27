"use client"
import styles from "./page.module.css";
import back from "./../../../public/assets/images/back-arrow.svg";
import SearchBar from "@/components/ui/input/SearchBar";
import { useState } from "react";
import add from "./../../../public/assets/images/add-circle.svg";
import AddMember from "@/components/ui/dialog/AddMember";
import IconBtn from "@/components/ui/btn/IconBtn";
import Tabs from "@/components/ui/btn/Tabs";
import { useRouter, useParams } from "next/navigation"; 
const ProjectDetails =()=>{
    const [search, setSearch]=useState("");
    const [isDialogOpen,setIsDialogOpen] = useState(false);
    const params = useParams();
    const router =useRouter();
    const projectId = params.id;

    console.log("id", projectId);

    const handleBackToHome =()=>{
        router.push("/projects");
    }

    const handleSearch = (value:string)=>{
        setSearch(value)
    }
    const handleOpenDialog = () => setIsDialogOpen(true);
    const handleCloseDialog = () => setIsDialogOpen(false);
    return <div className={styles.container}>
     <div className={styles.projectContainer}>
    <div className={styles.projectName}>Protocol labs</div>
    </div>

    <IconBtn icon={back} txt="Back to home" onClick={handleBackToHome}/>


    <Tabs/>
    <div className={styles.manipulation}>
        <SearchBar search={search} onChange={handleSearch } placeholder="Search by Role/Name" />
       <IconBtn icon={add} txt="Add Member" onClick={handleOpenDialog}/>
    </div>

    <div className={styles.memberContainer}>
        <div className={styles.memberList}>
            <div className={styles.memberListData}>
                <p className={styles.name}>Liam Carten</p>
                <p className={styles.email}>liam@gmail.com</p>
            </div>
            
        </div>

    </div>

    
    <AddMember
      isOpen={isDialogOpen}
      onClose={handleCloseDialog}
    />

    </div>


}
export default ProjectDetails;