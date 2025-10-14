"use client"

export default function detail() {
    return (
        <>
            <div className="relative w-full overflow-hidden bg-black -z-20">
            <img className="w-full absolute -z-10 sm:flex hidden" src="/image3.png" alt="image1" />
            <img className="w-full absolute -z-10 sm:hidden flex" src="/image3.png" alt="image2" />
            {/* Navigation */}
            <nav className="w-full sm:h-[90px] h-[64px] mx-auto grid sm:grid-cols-[1fr_3fr_1fr] grid-cols-2 justify-around items-center">
            {/* Movie */}
            <div className="sm:translate-x-20 translate-x-5 text-[#FDFDFD] flex flex-1 gap-3 items-center">
                <img className="sm:w-[33.33px] sm:h-[31.18] w-[23.33px] h-[21.82px]" src="/Vector1.png" alt="logo movie" />
                <h1 className="sm:text-[28.4px] text-[19.9px]">Movie</h1>
            </div>
            {/* Middle list */}
            <h2 className="text-[#FFFFFF] md:flex flex-1 gap-10 hidden font-medium">
                <span>Home</span> <span>Favorites</span>
            </h2>
            {/* Search & Menu */}
            <form action="" className=" relative md:flex hidden items-center">
                <img src="/Vector2.png" alt="search" className="absolute pl-3" />
                <input type="text" placeholder="Search Movie" className="text-[#717680] border bg-[#252B37] border-[#252B37] rounded-lg w-[243px] h-[56] pl-10" />
            </form>
            <div className="md:hidden flex justify-end items-center gap-4 translate-x-[-13px]">
                <img src="/Vector3.png" alt="search" />
                <img src="/Menu1.png" alt="search" />
            </div>
            </nav>

            {/* Hero */}
            <section className="w-full sm:h-[673px] h-[448px] flex items-center">
            
            </section>
        </div>

            {/* Footer */}
            <footer className="gap-5 md:pl-20 pl-10 mx-auto bg-black w-full h-[120px] grid md:grid-cols-2 grid-cols-1 justify-center item-center content-center">
                {/* Movie */}
                <div className=" text-[#FDFDFD] flex flex-1 gap-3 items-center">
                <img className=" sm:w-[33.33px] sm:h-[31.18] w-[23.33px] h-[21.82px]" src="/Vector1.png" alt="logo movie" />
                <h1 className="sm:text-[28.4px] text-[19.9px]">Movie</h1>
                </div> 
                {/* Copyright */}
                <p className=" text-[#535862] md:pl-55 pl-0  grid md:justify-center justify-start items-center">Copyright &copy; {new Date().getFullYear()} Movie Explorer</p>
            </footer>

        </>
    )
}