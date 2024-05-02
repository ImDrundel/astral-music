import styles from "./menuItem.module.scss";
import Image from "next/image";

interface MenuProps {
  item_name: string;
}

export default function MenuItem(props: MenuProps) {
  return (
    <div className={styles.menu_item}>
      {/* <Image src={} alt={props.item_name} width={30} height={30} /> */}
      Trending
    </div>
  );
}
