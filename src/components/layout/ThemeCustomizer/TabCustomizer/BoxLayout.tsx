import { Box } from '@data/tags'
import CommonUL from './CommonUL'
import { Badge } from 'reactstrap'
import { LtrDataType } from '@data/props/ThemeCustomizer'

const BoxLayout :React.FC<LtrDataType> = ({ handleLayout, layout_type }) => {
  return (
    <li className={`px-3 box-layout ${layout_type === "box-layout" ? "active" : ""}`} data-attr="ltr" onClick={() => handleLayout("box-layout")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-light sidebar"></li>
          <li className="bg-light body">
            <Badge color="primary">{Box}</Badge>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default BoxLayout