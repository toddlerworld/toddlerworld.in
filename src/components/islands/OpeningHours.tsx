import { useMemo, useState } from 'react';
import './OpeningHours.css';

interface Hour {
  day: string;
  open: string | null;
  close: string | null;
}

function to12h(t: string) {
  const [h, m] = t.split(':').map(Number);
  const period = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour}${period}` : `${hour}:${String(m).padStart(2, '0')}${period}`;
}

export default function OpeningHours({ hours }: { hours: readonly Hour[] }) {
  const [open, setOpen] = useState(false);

  const { todayIdx, isOpenNow, todayHour } = useMemo(() => {
    const now = new Date();
    // JS: 0=Sun..6=Sat. Our array is Mon..Sun, so map.
    const jsDay = now.getDay();
    const idx = jsDay === 0 ? 6 : jsDay - 1;
    const th = hours[idx];
    let openNow = false;
    if (th?.open && th?.close) {
      const [oh, om] = th.open.split(':').map(Number);
      const [ch, cm] = th.close.split(':').map(Number);
      const mins = now.getHours() * 60 + now.getMinutes();
      openNow = mins >= oh * 60 + om && mins < ch * 60 + cm;
    }
    return { todayIdx: idx, isOpenNow: openNow, todayHour: th };
  }, [hours]);

  const todayLabel = todayHour?.open
    ? `${to12h(todayHour.open)} – ${to12h(todayHour.close!)}`
    : 'Closed today';

  return (
    <div className={`hours${open ? ' is-open' : ''}`}>
      <button className="hours__summary" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className={`hours__status hours__status--${isOpenNow ? 'open' : 'closed'}`}>
          <span className="hours__dot" aria-hidden="true" />
          {isOpenNow ? 'Open now' : 'Closed now'}
        </span>
        <span className="hours__today">Today: {todayLabel}</span>
        <svg
          className="hours__chevron"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="hours__list">
        <ul className="hours__list-inner">
          {hours.map((h, i) => (
            <li key={h.day} className={`hours__row${i === todayIdx ? ' is-today' : ''}`}>
              <span className="hours__day">{h.day}</span>
              <span className="hours__time">
                {h.open ? `${to12h(h.open)} – ${to12h(h.close!)}` : 'Closed'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
