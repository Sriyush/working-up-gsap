import styles from "./style.module.scss";
import { AiOutlineGithub , AiOutlineTwitter} from "react-icons/ai";
import { FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="#" target="_blank"><AiOutlineGithub/></a>
      <a href="#" target="_blank"><FaXTwitter/></a>
      <a href="" target="_blank"><FaLinkedin/></a>
    </div>
  );
}