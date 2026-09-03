import { CONTACT } from "../data/content";
import { EmailIcon, InstagramIcon, LinkedInIcon } from "./icons/Icons";

/** Email / LinkedIn / Instagram — links carried over unchanged. */
export function ContactList() {
  return (
    <ul className="contact-list">
      <li>
        <a href={`mailto:${CONTACT.email}`}>
          <span className="icon icon--email">
            <EmailIcon />
          </span>
          {CONTACT.email}
        </a>
      </li>
      <li>
        <a href={CONTACT.linkedin.href} target="_blank" rel="noopener noreferrer">
          <span className="icon icon--linkedin">
            <LinkedInIcon />
          </span>
          {CONTACT.linkedin.label}
        </a>
      </li>
      <li>
        <a href={CONTACT.instagram.href} target="_blank" rel="noopener noreferrer">
          <span className="icon icon--instagram">
            <InstagramIcon />
          </span>
          {CONTACT.instagram.label}
        </a>
      </li>
    </ul>
  );
}
