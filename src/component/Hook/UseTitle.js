import { useEffect } from "react"


const UseTitle = (title)=>{
    useEffect(()=>{
        document.title = `${title}-mobile-repair`
    },[title])
}
export default UseTitle;