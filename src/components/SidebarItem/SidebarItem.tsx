import Image from "next/image";
import styles from "./SidebarItem.module.css";

type SidebarItemProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
};

export function SidebarItem({ imgSrc, imgAlt}: SidebarItemProps) {
  return (
    <div className={styles.sidebarItem}>
    <a className={styles.sidebarLink} href="#">
      <Image
        className={styles.sidebarImg}
        src={imgSrc}
        alt={imgAlt}
        width={250}
        height={150}
        priority
      />
    </a>
  </div>
  );
}
