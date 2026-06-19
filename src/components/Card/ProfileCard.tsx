import { useState } from 'react';
import './Card.css';

type Props = {
  image?: string;
  name: string;
  role?: string;
  bio?: string;
};

export default function ProfileCard({ image, name, role, bio }: Props) {
  return (
    <div className="card card--profile">
      <div className="card__media card__media--circle">
        {image && !((window as any).__profileImgError || false) ? (
          <ProfileImage src={image} alt={name} />
        ) : (
          <div className="card__avatar-fallback" aria-hidden>
            <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="#f6fbfb" />
              <path d="M12 12c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3z" fill="#dceff0"/>
              <path d="M4 20c0-2.2091 3.5817-4 8-4s8 1.7909 8 4v1H4v-1z" fill="#eaf6f6"/>
            </svg>
          </div>
        )}
      </div>
      <div className="card__body">
        <div className="card__title">{name}</div>
        {role && <div className="card__meta">{role}</div>}
        {bio && <div className="card__text">{bio}</div>}
      </div>
    </div>
  );
}

function ProfileImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) {
    // persist failure globally during this session to avoid flicker
    (window as any).__profileImgError = true;
    return null;
  }
  return <img src={src} alt={alt} onError={() => setError(true)} />;
}
