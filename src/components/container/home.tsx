"use client"


export default function home() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <img className="w-full absolute -z-10" src="/image1.png" alt="imageawal" />
        {/* Navigation */}
        <nav className=" bg-amber-300 w-full sm:h-[90px] h-[64px] mx-auto grid sm:grid-cols-[1fr_3fr_1fr] grid-cols-2 justify-around items-center">
          {/* Movie */}
          <div className="translate-x-3 sm:translate-x-0 bg-amber-800 flex flex-1 gap-3 sm:justify-center justify-start items-center">
            <img className="sm:w-[33.33px] sm:h-[31.18] w-[23.33px] h-[21.82px]" src="/Vector1.png" alt="logo movie" />
            <h1 className="sm:text-[28.4px] text-[19.9px]">Movie</h1>
          </div>
          {/* Middle list */}
          <h2 className="bg-red-400 sm:flex flex-1 gap-10 hidden font-medium">
            <span>Home</span> <span>Favorites</span>
          </h2>
          {/* Search & Menu */}
          <form action="" className="bg-amber-800 relative sm:flex hidden items-center">
            <img src="/Vector2.png" alt="search" className="absolute" />
            <input type="text" placeholder="Search movie" className="border border-black rounded-md w-[243px] h-[56] pl-6" />
          </form>
          <div className="bg-amber-700 sm:hidden flex flex-1 justify-end items-center gap-4 translate-x-[-13px]">
            <img src="/Vector3.png" alt="search" />
            <img src="/Menu1.png" alt="search" />
          </div>
        </nav>

        {/* Hero */}
        <section className="w-full sm:h-[673px] h-[448px]">

        </section>
      </div>
    </>
  )
}