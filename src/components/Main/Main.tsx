import styles from "./Main.module.css";
import { Nav } from "@components/Nav/Nav";
import { MainCentralblock } from "@components/MainCentralblock/MainCentralblock";
import { MainSidebar } from "@components/MainSidebar/MainSidebar";

export function Main() {
  return (
    <main className={styles.main}>
      <Nav />
      <MainCentralblock />
      <MainSidebar />
    </main>
  );
}
