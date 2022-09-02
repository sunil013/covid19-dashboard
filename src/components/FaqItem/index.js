import './index.css'

const FaqItem = props => {
  const {faqDetails} = props
  const {question, answer} = faqDetails
  return (
    <li className="faq-item">
      <p className="faq-question">{question}</p>
      <p className="faq-answer">{answer}</p>
    </li>
  )
}

export default FaqItem
