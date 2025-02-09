// export default function Header() {
//     return (
//         <header className="text-[#edc84b] mx-auto text-center p-4">
//
//             <h1 className="text-2xl font-bold relative before:content-['-'] before:absolute before:left-[-2rem] before:top-0  after:content-['-'] after:absolute after:right-[-1rem] after:top-0  ">
//                 Fast React Pizza Co.
//             </h1>
//
//         </header>
//     )
//         ;
// }
//

export default function Header() {
    return (
        <header className="text-primary mx-auto text-center py-8">
            <h1 className="text-5xl font-light uppercase tracking-wide relative inline-block">
                Fast React Pizza Co.
                <span className="absolute left-0 top-1/2 w-16 h-[3px] bg-primary -translate-y-1/2"></span>
                <span className="absolute right-0 top-1/2 w-16 h-[3px] bg-primary -translate-y-1/2"></span>
            </h1>
        </header>
    );
}
