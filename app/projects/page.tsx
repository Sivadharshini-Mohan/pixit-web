"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For App Router
import NewProjectCard from "@/components/ui/card/NewProjectCard";
import ProjectCard from "@/components/ui/card/ProjectCard";
import SearchBar from "@/components/ui/input/SearchBar";
import AddProject from "@/components/ui/dialog/AddProject";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter(); // Initialize router

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleSearch = (value: string) => setSearch(value);

  // Function to navigate to project details page
  const handleProjectClick = (id: string) => {
    router.push(`/projects/${id}`); // Navigate to dynamic route
  };

  
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if(token){
      localStorage.setItem("token", token);
      window.location.href = "/projects";
    }
  },[])

  return (
    <div className={` ${styles.container} container`}>
      <div className={styles.spaceBetween}>
        <div className={styles.flex}>
          <h1 className={styles.heading}>Projects <p className={styles.projectCount}>(2)</p></h1>
          
          <SearchBar search={search} onChange={handleSearch} placeholder="Search" />
        </div>
        <p className={styles.username}>Hello Siva! 👋</p>
      </div>
      <div className={styles.grid}>
        <div onClick={handleOpenDialog}>
          <NewProjectCard />
        </div>
        {/* Clicking this will navigate to /projects/123 */}
        <div onClick={() => handleProjectClick("123")}>
          <ProjectCard projectName="Project Name" memberName="Sivadharshini" memberRole="Developer" />
        </div>
      </div>
      <AddProject isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default Projects;
