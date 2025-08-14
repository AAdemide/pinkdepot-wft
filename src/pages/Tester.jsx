import { useState } from "react";

export default function Tester() {
    const [text, setText] = useState("LIGHT_MODE");
    const labelStyle = `
        w-[90px] h-[40px] inline-block rounded-full relative cursor-pointer top-10 left-5 bg-[#ebefeb] 
        after:content-[""] after:size-[36px] after:absolute after:top-[5%] after:left-[2%] 
        
        `;
    const beforeElement = `before:absolute before:top-[40%] before:left-[55%]    
    `;
    const handleClick = () => {
        setText( text==="DARK_MODE" ? "LIGHT_MODE" : "DARK_MODE")
    }
    return(
       <div className="bg-slate-600 size-full">
            <div className="bg-slate-800 size-[550px] m-auto">
                <input type="checkbox" />
            </div>
       </div>
       
    )
};

{/* <div className="select-none size-full bg-neutral-500 text-center pt-56">
<input type="checkbox" name="" id="darkmode-toggle" />
<label htmlFor="darkmode-toggle" className="w-[500px] h-[200px] m-auto bg-[#ebebeb] block rounded-full relative shadow-mybx cursor-pointer">
    <div  className="size-full rounded-full text-left">
        <span className="size-[200px] inline-block rounded-full text-center align-middle bg-pink-800 mHidden">
            <img
                className="bg-inherit size-3/4 mt-6 inline-block rounded-full"
                src="/sun-icon.svg"
                alt="" />
        </span>
        <span className="text-2xl ms-14">Light Mode</span>
    </div>
    
    <div className="size-full rounded-full text-right bg-slate-600 hidden">
        <span className="text-2xl me-14">Dark Mode</span>
        <span className="size-[200px] inline-block rounded-full text-center align-middle bg-white">
            <img
                className="bg-inherit size-3/4 mt-4 inline-block rounded-full"
                src="/moon-icon.svg"
                alt="" />
        </span>
        
    </div>
    
</label>

<blockquote class="pt-20 text-2xl font-semibold italic text-center text-slate-900">
    When you look
    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
        <span class="relative text-white">annoyed</span>
    </span>
    all the time, people think that you're busy.
</blockquote>
</div> */}