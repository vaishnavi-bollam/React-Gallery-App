// Write your code here.
const ThumbnailItem = props => {
  const {eachImage, uiChangeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImage
  const onClickedImage = () => {
    uiChangeImage(id)
  }
  const classAdding = isActive ? 'active-tab-btn' : ''

  return (
    <li className={`${classAdding}`}>
      <button aria-label="View Image">
        <img
          src={thumbnailUrl}
          onClick={onClickedImage}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
