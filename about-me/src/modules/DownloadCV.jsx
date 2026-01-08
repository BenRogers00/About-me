import '../styling/button.css';

export default function DownloadCV() {
    return (
        <a href="/CV.pdf" download>
            <button>Download CV</button>
        </a>
    );
}