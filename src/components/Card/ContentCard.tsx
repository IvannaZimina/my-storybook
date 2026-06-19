import { useState } from 'react';
import './Card.css';

type Props = {
  image?: string;
  title: string;
  excerpt?: string;
};

export default function ContentCard({ image, title, excerpt }: Props) {
  return (
    <div className="card card--content">
      <div className="card__media card__media--square">
        {image ? (
          <ContentImage src={image} alt={title} />
        ) : (
          <div className="card__image-fallback" aria-hidden>
            <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="200" fill="#f4fbfb" />
              <g fill="#e6f6f6">
                <rect x="20" y="20" width="100" height="40" rx="4" />
                <rect x="140" y="60" width="220" height="20" rx="4" />
                <rect x="20" y="120" width="360" height="20" rx="4" />
              </g>
            </svg>
          </div>
        )}
      </div>
      <div className="card__body">
        <div className="card__title">{title}</div>
        {excerpt && <div className="card__text">{excerpt}</div>}
      </div>
    </div>
  );
}

function ContentImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return <img src={src} alt={alt} onError={() => setError(true)} />;
}
