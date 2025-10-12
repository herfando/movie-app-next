"use client"


export default function home() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <img className="w-full absolute -z-10 sm:flex hidden" src="/image1.png" alt="image1" />
        <img className="w-full absolute -z-10 sm:hidden flex" src="/image2.png" alt="image2" />
        {/* Navigation */}
        <nav className="  w-full sm:h-[90px] h-[64px] mx-auto grid sm:grid-cols-[1fr_3fr_1fr] grid-cols-2 justify-around items-center">
          {/* Movie */}
          <div className="translate-x-3 sm:translate-x-0  flex flex-1 gap-3 sm:justify-center justify-start items-center">
            <img className="sm:w-[33.33px] sm:h-[31.18] w-[23.33px] h-[21.82px]" src="/Vector1.png" alt="logo movie" />
            <h1 className="sm:text-[28.4px] text-[19.9px]">Movie</h1>
          </div>
          {/* Middle list */}
          <h2 className=" sm:flex flex-1 gap-10 hidden font-medium">
            <span>Home</span> <span>Favorites</span>
          </h2>
          {/* Search & Menu */}
          <form action="" className=" relative sm:flex hidden items-center">
            <img src="/Vector2.png" alt="search" className="absolute pl-3" />
            <input type="text" placeholder="Search movie" className="border bg-[#252B37] border-[#252B37] rounded-lg w-[243px] h-[56] pl-10" />
          </form>
          <div className=" sm:hidden flex flex-1 justify-end items-center gap-4 translate-x-[-13px]">
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