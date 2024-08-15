import styles from "./Main.module.css";
import { Nav} from "@components/Nav/Nav";
import { MainCenterblock } from "@components/MainCenterblock/MainCenterblock";
import { MainSidebar } from "@components/MainSidebar/MainSidebar";

export function Main() {
  return (
    <main className={styles.main}>
      <Nav />
      <MainCenterblock />
      <MainSidebar />
    </main>
  );
}