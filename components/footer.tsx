import Link from '@mui/material/Link';
import styles from '../styles/footer.module.css'

const MakeLink = (href: string, content: string) => {
  return (
    <Link
      href={href}
      underline="none"
      align="center"
      sx={{
        fontStyle: "default",
        fontSize: "default",
        fontWeight: "light",
        textTransform: "capitalize",
        typography: "body2",
      }}
      style={{
        padding: "1rem",
        // This isn't the way.
        color: "black",
      }}
    >
      {content}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          {MakeLink("https://policies.cookieandrock.com/privacy", "Privacy")}
        </li>
        <li>
          {MakeLink("https://policies.cookieandrock.com/terms", "Terms")}
        </li>
      </ul>
    </footer>
  );
}