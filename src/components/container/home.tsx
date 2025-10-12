"use client"


export default function home() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <img className="w-full absolute -z-10" src="/image1.png" alt="imageawal" />
        {/* Navigation */}
        <nav className=" px-20 w-full sm:h-[90px] h-[64px] mx-auto grid grid-cols-3 justify-between items-center">
          <div className="flex flex-1 gap-3 justify-start items-center">
            <img className="sm:w-[33.33px] sm:h-[31.18] w-[23.33px] h-[21.82px]" src="/Vector1.png" alt="logo movie" />
            <h1 className="sm:text-[28.4px] text-[19.9px]">Movie</h1>
          </div>
          <h2 className="sm:flex flex-1 gap-10 hidden font-medium">
            <span>Home</span> <span>Favorites</span>
          </h2>
          <form action="" className="relative sm:flex hidden">
            <img src="/Vector2.png" alt="search" className="absolute" />
            <input type="text" placeholder="Search movie" className="border border-black rounded-md w-[243px] h-[56]" />
          </form>
          <img src="/Vector3.png" alt="search" className="sm:hidden flex"/>

        </nav>

        {/* Hero */}
        <section className="w-full sm:h-[673px] h-[448px]">selmat pagi

        </section>
      </div>
    </>
  )
}