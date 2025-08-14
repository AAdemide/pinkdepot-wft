import { useState } from "react"

export default function Login() {
    const [err, setErr] = useState(false);
    const style=`
    
    `;
    return (
        <div className="overflow-auto w-screen h-screen loginBackground dark:loginBackgroundDark bgSmall flex flex-col justify-between">
            <input className="items-start" type="checkbox" name="" id="" onClick={() => setErr(!err)} />
            {/* from main below w-[550px] */}
            <main className={`m-auto w-11/12 rounded-md bg-white dark:bg-[#201d1d] shadow-2xl shadow-gray-900/80 formHouse ${(err ? "h-[750px]" : "h-[650px]")}`}>
                <div className={`w-3/4 m-auto mt-3 p-4 text-sm rounded-lg border-2 border-red-400 bg-red-800 text-red-400 font-medium ${(err ? "" : "hidden")}`} role="alert">
                    We didn't recognize the username or password you entered. Please try again.
                </div>
                <img className="w-24 h-24 m-auto relative top-8" src="/logo.png" alt="" />
                <h1 className="relative top-20 text-5xl text-center f-size">TPD Account Sign On</h1>
                <hr className="border-0 relative top-28 block m-auto w-[470px] width h-0.5 bg-[rgba(153,12,88,.2)]"/>
                <form className="relative top-36 block m-auto w-[470px] width" action="">
                    <fieldset className="flex flex-col w-[470px] width mb-4">
                        <label className="mb-2" htmlFor="username">User ID</label>
                        <input className="inputHover rounded h-9 border border-[rgb(132,204,22)] inputHover bg-white dark:bg-[#201d1d] ps-3" type="text" placeholder="Enter Your User ID"/>
                    </fieldset>
                    <fieldset className="flex flex-col w-[470px] width">
                        <label className="mb-2" htmlFor="password">Password</label>
                        <input className="inputHover rounded h-9 border border-[rgb(132,204,22)] inputHover bg-white dark:bg-[#201d1d] ps-3" type="password" placeholder="Enter Your Password"/>
                    </fieldset>
                    <button className="mt-8 text-[#90e017] text-xl h-12 w-[470px] width bg-[rgb(153,12,88)] rounded">Sign In</button>
                </form>
                <section className= {`relative ${err ? "top-40":"top-44" } m-auto w-[470px] width flex flex-col`}>
                    <span className="flex justify-between">
                        <a className="" href="">Forgot Password</a>
                        <a className="" href="">Change Password</a> 
                    </span>    
                    <a className="mt-2" href="">Terms of Use</a>
                </section>                
            </main>

            <footer className="z-10 my-5">
                <p className="text-center">
                    © Copyright 2077 The Pink Depot. No Rights Reserved
                </p>
                <p className="hidden">
                    Look at the awesome logo I made at: <a href='https://onlinelogomaker.com/logomaker/?project=45040209' title='Online Logo Maker'>onlinelogomaker.com</a>
                </p>
            </footer>
        </div>             
    )
}