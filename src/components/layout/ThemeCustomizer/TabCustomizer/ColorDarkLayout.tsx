import { DarkLayout } from "@data/tags";
import { DarkColorData } from "@data/layout";
import { useAppDispatch } from "@hooks/common/State";
import { setDarkMode } from "@state/common/layout/LayoutSlice";
import { PropsLightColor } from "@data/props/Layout";

const ColorDarkLayout = () => {
    const dispatch = useAppDispatch()
    const handleColor = (data:PropsLightColor) => { 
      dispatch(setDarkMode(true));
      document.documentElement.style.setProperty('--theme-default', data.primary);
      document.documentElement.style.setProperty('--theme-secondary', data.secondary);
    }
  return (
    <>
      <h5>{DarkLayout}</h5>
      <ul className="layout-grid customizer-color flex-row dark">
        {DarkColorData.map((data,i)=>(
          <li className="color-layout" data-attr={`color-${i+1}`} data-primary={data.primary} onClick={()=>handleColor(data)} key={i}>
            <div></div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ColorDarkLayout