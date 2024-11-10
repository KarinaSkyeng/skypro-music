import { Bar } from "@/components/Bar/Bar";
import { Nav } from "@/components/Nav/Nav";
import { MainSidebar } from "@/components/MainSidebar/MainSidebar";
import styles from "./page.module.css";
import { Search } from "@/components/Search/Search";

export default function TrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div className={styles.mainCenterblock}>
            <Search />
            {children}
          </div>
          <MainSidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}