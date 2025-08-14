export default function Card (props){
  
    return(
        <div className="mb-2 sm:max-w-[680px] sm:w-5/12 ss:w-1/2 w-2/3 mx-auto px-4 pt-6 rounded shadow-lg bg-white dark:bg-[#201d1d] shadow-neutral-400/70 dark:shadow-neutral-950/70">
            <section className="border-b-4 dark:border-neutral-600 flex items-baseline justify-between">
                <h3 className="pb-2 border-b-4 border-[#d2559b] text-2xl relative top-1">{props.header}</h3>
            {props.viewLink ? <span className="text-l font-bold text-[#d2559b]">View</span> : ""}
            </section>
            <section className="flex pt-5">
                {props.child}
            </section>
            
        </div>
    )
}
