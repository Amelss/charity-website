import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '../styles/Blurb.module.css'

export default function Blurb({intro}) {
const {blurbHeading, blurbText} = intro.fields
  return (
      <div>
          <h1 className={styles.blurbHeading}>{blurbHeading}</h1>
          <div className={styles.blurbText}>{documentToReactComponents(blurbText)}</div>
      </div>
  )
}
