import "./FeatureCard.css"
export default function FeatureCard({title,desc}) {
  return (
    <div className="feat-card">
      <div className="fc-title">{title}</div>
      <div className="fc-desc">{desc}</div>
    </div>
  )
}
