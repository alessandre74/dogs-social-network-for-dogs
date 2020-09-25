import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = props => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commnetsSection = React.useRef(null)
  const { login } = React.useContext(UserContext)

  React.useEffect(() => {
    commnetsSection.current.scrollTop = commnetsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul
        ref={commnetsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  )
}

export default PhotoComments
