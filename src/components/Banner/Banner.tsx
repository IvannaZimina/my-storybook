import './Banner.css';

type BannerItem = {
  id: string;
  title?: string;
  subtitle?: string;
  text?: string;
  accent?: string;
};

type BannerProps = {
  items: BannerItem[];
  orientation?: 'horizontal' | 'vertical';
};

export default function Banner({ items, orientation = 'horizontal' }: BannerProps) {
  return (
    <div className={`banner banner--${orientation}`}>
      {items.map((it, index) => (
        <div
          className={`banner__item banner__item--${orientation} banner__item--slot-${index}`}
          key={it.id}
          style={{ borderColor: it.accent || 'transparent' }}
        >
          <div className="banner__bg" />
          <div className="banner__content">
            {it.title && <div className="banner__title">{it.title}</div>}
            {it.subtitle && <div className="banner__subtitle">{it.subtitle}</div>}
            {it.text && <div className="banner__text">{it.text}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
