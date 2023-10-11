import './index.css'

const GreetingImage = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails

  return (
    <div>
      <img src={imageUrl} alt={imageAltText} className="greeting-image" />
    </div>
  )
}
export default GreetingImage
