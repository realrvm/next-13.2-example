import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Ubuntu } from "next/font/google";
import { Titillium_Web } from "next/font/google";

import styles from "./styles.module.scss";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"] });
const titillium = Titillium_Web({ subsets: ["latin"], weight: ["700"]});

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  const { pathname } = useRouter();

  return (
    <div className={styles["app-header"]}>
      <Link href="/" className={pathname === "/" ? styles["active"] : ""}>
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === "/about" ? styles["active"] : ""}
      >
        About
      </Link>
      <div className={ubuntu.className}>Ubuntu</div>
      <div className={titillium.className}>Titillium</div>
    </div>
  );
};
