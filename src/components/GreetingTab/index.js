import './index.css'

const GreetingTab = props => {
  const {greetingDetails, isActive, updatedDetails} = props
  const {buttonText, id} = greetingDetails

  const onClickGreeting = () => {
    updatedDetails(id)
  }

  const activeBtn = isActive ? 'button active' : 'button'

  return (
    <li className="button-item">
      <button type="button" className={activeBtn} onClick={onClickGreeting}>
        {buttonText}
      </button>
    </li>
  )
}
export default GreetingTab
