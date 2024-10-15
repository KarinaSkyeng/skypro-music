import { PersonalSideBar } from "../PersonalSideBar/PersonalSideBar";
import styles from "./MainSidebar.module.css";
import { SidebarItem } from "@/components/SidebarItem/SidebarItem";

export function MainSidebar() {
  return (
    <div className={styles.sidebar}>
      <PersonalSideBar />
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <SidebarItem 
              title="Плейлист дня" 
              imgSrc="/img/playlist01.png" 
              imgAlt="Плейлист дня" />
          <SidebarItem 
              title="100 танцевальных хитов" 
              imgSrc="/img/playlist02.png" 
              imgAlt="100 танцевальных хитов"/>
          <SidebarItem 
              title="Инди-заряд" 
              imgSrc="/img/playlist03.png" 
              imgAlt="Инди-заряд"/>
        </div>
      </div>
    </div>
  );
}
