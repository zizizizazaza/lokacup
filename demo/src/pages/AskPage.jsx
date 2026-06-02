import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import MarketCard from '../components/MarketCard'
import Footer from '../components/Footer'

const MARKETS = [
  {
    home: { flag: '🇧🇷', name: 'Brazil' },
    away: { flag: '🇲🇦', name: 'Morocco' },
    league: 'Group D · Today',
    question: 'Match winner',
    platform: 'Polymarket',
    vol: '$1.2M',
    options: [
      { flag: '🇧🇷', label: 'Brazil',  yes: 68, dir: 'up' },
      {              label: 'Draw',    yes: 18, dir: 'flat' },
      { flag: '🇲🇦', label: 'Morocco', yes: 14, dir: 'down' },
    ],
  },
  {
    home: { flag: '🇫🇷', name: 'France' },
    away: { flag: '🇨🇦', name: 'Canada' },
    league: 'Group D · Today',
    question: 'Match winner',
    platform: 'Polymarket',
    vol: '$890k',
    options: [
      { flag: '🇫🇷', label: 'France', yes: 82, dir: 'up' },
      {              label: 'Draw',   yes: 12, dir: 'flat' },
      { flag: '🇨🇦', label: 'Canada', yes: 6,  dir: 'down' },
    ],
  },
  {
    home: { flag: '🇪🇸', name: 'Spain' },
    away: { flag: '🇲🇦', name: 'Morocco' },
    league: 'Group F · Tomorrow',
    question: 'Total goals 2.5+',
    platform: 'Polymarket',
    vol: '$540k',
    options: [
      { label: 'Over',  yes: 64, dir: 'up' },
      { label: 'Under', yes: 36, dir: 'down' },
    ],
  },
  {
    home: { flag: '🇦🇷', name: 'Argentina' },
    away: { flag: '🇺🇾', name: 'Uruguay' },
    league: 'Group A · Tomorrow',
    question: 'Both teams to score',
    platform: 'Polymarket',
    vol: '$320k',
    options: [
      { label: 'Yes', yes: 73, dir: 'up' },
      { label: 'No',  yes: 27, dir: 'down' },
    ],
  },
  {
    home: { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'England' },
    away: { flag: '🇧🇪', name: 'Belgium' },
    league: 'Group E · Tomorrow',
    question: 'First half winner',
    platform: 'Polymarket',
    vol: '$210k',
    options: [
      { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', label: 'England', yes: 38, dir: 'up' },
      {              label: 'Draw',   yes: 41, dir: 'flat' },
      { flag: '🇧🇪', label: 'Belgium', yes: 21, dir: 'down' },
    ],
  },
  {
    home: { flag: '🇵🇹', name: 'Portugal' },
    away: { flag: '🇲🇽', name: 'Mexico' },
    league: 'Group C · Tomorrow',
    question: 'Match winner',
    platform: 'Kalshi',
    vol: '$185k',
    options: [
      { flag: '🇵🇹', label: 'Portugal', yes: 63, dir: 'up' },
      {              label: 'Draw',     yes: 22, dir: 'flat' },
      { flag: '🇲🇽', label: 'Mexico',   yes: 15, dir: 'down' },
    ],
  },
]

const FILTERS = ['All', 'Winner odds', 'Player props', 'Market moves', 'Arb targets']

const QUESTIONS = [
  "Is Argentina's 12% probability rational based on qualifying stats?",
  'Will Neymar score tonight? Cross-reference Kalshi injury reports.',
  "Why did France's odds drop 3% in the last 4 hours?",
  'Find me the highest +EV bet for the Golden Boot right now.',
  'Compare Polymarket vs Kalshi odds for England reaching the semis.',
  'Analyze weather impact on the Total Goals Under 168.5 market.',
  'What does the AI consensus say about USA vs Mexico outrights?',
]

export default function AskPage() {
  const [filter, setFilter] = useState('All')
  const navigate = useNavigate()

  return (
    <>
      <Hero />
      <div id="main" className="container">

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Hot markets</h2>
          <div className="section-meta">$42.8M live volume · updated 12s ago</div>
        </div>
        <div className="markets-grid">
          {MARKETS.map((m, i) => <MarketCard key={i} market={m} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Suggested questions</h2>
          <div className="section-meta">7 prompts · updated 8s ago</div>
        </div>
        <div className="filter-header">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={'filter-chip' + (filter === f ? ' active' : '') + (f === 'Arb targets' ? ' arb' : '')}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="questions-grid">
          {QUESTIONS.map((q) => (
            <div key={q} className="q-chip" onClick={() => navigate('/analysis/demo', { state: { query: q } })}>
              {q}
            </div>
          ))}
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
