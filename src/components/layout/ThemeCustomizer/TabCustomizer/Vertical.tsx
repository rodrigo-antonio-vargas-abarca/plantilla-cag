import ConfigDB from '@/config/ThemeConfig'
import { useAppDispatch } from '@hooks/common/State'
import { setLayout } from '@state/common/layout/ThemeCustomizerSlice'
import CommonUL from './CommonUL'

  const Vertical = () => {

  const dispatch= useAppDispatch()
  const handleLayout = (layoutName: string) => {
    localStorage.setItem("layout",layoutName)
    dispatch(setLayout(layoutName))
    ConfigDB.data.settings.layout_class = layoutName;
  }
  return (
    <li data-attr="normal-sidebar" className={`border-0 ${localStorage.getItem("layout") === "horizontal-wrapper" ? "active" : ""}`} onClick={() => handleLayout("horizontal-wrapper")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-dark sidebar"></li>
          <li className="bg-light body"></li>
        </ul>
      </div>
    </li>
  )
}

export default Vertical