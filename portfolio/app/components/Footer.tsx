import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6  border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Ambroise. Tous droits réservés.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/ambroise-bosch-b6b66323b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Ambroise0806"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
