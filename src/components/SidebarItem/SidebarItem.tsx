import Image from "next/image";
import styles from "./SidebarItem.module.css";
import Link from "next/link";

type SidebarItemProps = {
  imgSrc: string;
  imgAlt: string;
  href: string;
};

export function SidebarItem({ imgSrc, imgAlt, href}: SidebarItemProps) {
  return (
    <div className={styles.sidebarItem}>
    <Link className={styles.sidebarLink} href={href}>
      <Image
        className={styles.sidebarImg}
        src={imgSrc}
        alt={imgAlt}
        width={250}
        height={150}
        priority
      />
    </Link>
  </div>
  );
}
