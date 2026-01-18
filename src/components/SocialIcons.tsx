import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconClass =
  "text-white transition-all duration-300 hover:text-accent-green hover:drop-shadow-[0_0_8px_#B6FF2E] hover:scale-110";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.facebook.com/AlienXgamestudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={iconClass}
      >
        <FaFacebookF size={18} />
      </a>

      <a
        href="https://www.instagram.com/alienxgamestudio/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={iconClass}
      >
        <FaInstagram size={18} />
      </a>

      <a
        href="https://x.com/AlienXstudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className={iconClass}
      >
        <FaXTwitter size={18} />
      </a>

      <a
        href="https://discord.com/invite/WvfQJsjdeJ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        className={iconClass}
      >
        <FaDiscord size={18} />
      </a>

      <a
        href="https://www.tiktok.com/@alienxgamestudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className={iconClass}
      >
        <FaTiktok size={18} />
      </a>
    </div>
  );
}
