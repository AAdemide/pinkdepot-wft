import ThemeToggle from "./ThemeToggle";

//https://www.youtube.com/watch?v=S-T9XoCMwt4
export default function ToggleMenu(props){
    return(

        <div className="size-full flex overflow-auto items-stretch">
            <div className="w-80 pt-7 md:inline-block hidden md:bg-green-500">
                <ThemeToggle themeChange={props.themeChange}/>      
            </div>
            {props.children}
        </div>    
    )
}