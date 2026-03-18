'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const events = [
  { date: '2020', title: 'FREX Founded', description: 'Established in Kampala, Uganda.' },
  { date: '2021', title: 'Quantum Research Lab Opens', description: 'First quantum computer acquired.' },
  { date: '2022', title: 'Doctrinal Systems Initiative', description: 'Launched AI governance research.' },
  { date: '2023', title: 'Graphene Breakthrough', description: 'Demonstrated ultra‑fast water filtration.' },
  { date: '2024', title: 'First Spin‑off Company', description: 'FREX Solutions incorporated.' },
  { date: '2025', title: 'Global Partnerships', description: 'Collaborations with 10+ universities.' },
];

export default function Roadmap() {
  return (
    <VerticalTimeline>
      {events.map((event, idx) => (
        <VerticalTimelineElement
          key={idx}
          date={event.date}
          contentStyle={{ background: '#111827', color: '#fff', borderBottom: '2px solid #06B6D4' }}
          contentArrowStyle={{ borderRight: '7px solid #06B6D4' }}
          iconStyle={{ background: '#06B6D4', color: '#000' }}
        >
          <h3 className="text-xl font-bold">{event.title}</h3>
          <p className="text-gray-300">{event.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
