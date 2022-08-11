import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <ul className="navigation">
        <li>
          <a href="http://">Home</a>
        </li>
        <li>
          <a href="http://">About</a>
        </li>
        <li>
          <a href="http://">Contact</a>
        </li>
        <li>
          <a href="http://">Links</a>
        </li>
      </ul>
      <div className="menu">
        <a href="" className="menu__link">
          Link 1
        </a>
        <a href="" className="menu__link">
          Link 2
        </a>
        <a href="" className="menu__link">
          Link 3
        </a>
      </div>
      <div className={styles["mod"]}>
        <p>sdfdfsdfdfgdfsgdfgdfg</p>
      </div>
    </>
  );
}
