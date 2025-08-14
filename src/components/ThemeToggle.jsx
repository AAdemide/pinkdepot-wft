import { useEffect, useState } from "react";
export default function ThemeToggle(props){
    const [text, setText] = useState("dark");
    const labelStyle = `
        w-[90px] h-[40px] inline-block rounded-full relative cursor-pointer top-10 left-5 bg-[#ebefeb] 
        after:content-[""] after:size-[36px] after:absolute after:top-[5%] after:left-[2%] 
        
        `;
    const beforeElement = `before:absolute before:top-[40%] before:left-[55%]    
    `;
    
    const handleClick = () => {
        setText(  ( document.getElementById("darkmode-toggle") ).checked ? "dark" : " ")
    }

    useEffect( () => {
        setText(  ( document.getElementById("darkmode-toggle") ).checked ? "dark" : " ")
        {props.themeChange(text)}
    }, [text])
    
    return(
       <>
            <input type="checkbox" name="" id="darkmode-toggle" className="hidden" onClick={handleClick} />
            <label htmlFor="darkmode-toggle" id="dt-label" className={labelStyle
            + beforeElement}></label>
       </>
       
    )
};
