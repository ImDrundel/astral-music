import Image from "next/image";
import Dark_theme from "./img/dark_theme.svg";
import Logo from "./img/logo.svg";
import Discover from "./img/discover.svg";
import trending from "./img/trending.svg";
import genre from "./img/genre.svg";
import karaoke from "./img/karaoke.svg";
import recent from "./img/recent.svg";
import playlist from "./img/playlist.svg";
import favourite from "./img/favourite.svg";
import settings from "./img/settings.svg";
import account from "./img/account.svg";

import styles from "./leftbar.module.scss";
// import MenuItem from "./components/menuItem";

export default function Leftbar() {
  return (
    <div className={styles.leftbar}>
      <div className={styles.logo}>
        <div className={styles.img}>
          <Image src={Logo} alt="Catalog" width={50} height={50} />
        </div>
        <div className={styles.name}>Astral music</div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_title}>MENU</div>
        <div className={styles.menu_item}>
          <Image src={Discover} alt="Discover" width={30} height={30} />
          Discover
        </div>
        <div className={styles.menu_item}>
          <Image src={trending} alt="trending" width={30} height={30} />
          Trending
        </div>
        <div className={styles.menu_item}>
          <Image src={genre} alt="genre" width={30} height={30} />
          Genre
        </div>
        <div className={styles.menu_item}>
          <Image src={karaoke} alt="karaoke" width={30} height={30} />
          Karaoke
        </div>
      </div>
      <div className={styles.dev_spase}></div>
      <div className={styles.menu}>
        <div className={styles.menu_title}>LIBRARY</div>
        <div className={styles.menu_item}>
          <Image src={recent} alt="recent" width={30} height={30} />
          Recent
        </div>
        <div className={styles.menu_item}>
          <Image src={playlist} alt="playlist" width={30} height={30} />
          Playlist
        </div>
        <div className={styles.menu_item}>
          <Image src={favourite} alt="favourite" width={30} height={30} />
          Favourite
        </div>
        <div className={styles.menu_item}>
          <Image src={account} alt="account" width={30} height={30} />
          Account
        </div>
        <div className={styles.menu_item}>
          <Image src={settings} alt="settings" width={30} height={30} />
          Settings
        </div>
      </div>
      <div className={styles.change_theme}>
        <Image src={Dark_theme} alt="Catalog" width={150} height={100} />
      </div>
    </div>
  );
}
