import styles from "./Main.module.css";
import { Nav } from "@components/Nav/Nav";
import { MainSidebar } from "@components/MainSidebar/MainSidebar";
import { MainCentralblock } from "@components/MainCetralblock/MainCentralblock";
export function Main() {
  return (
    <main className={styles.main}>
      <Nav />
      <MainCentralblock />
      <MainSidebar />
    </main>
  );
}
