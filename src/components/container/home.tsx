"use client"


export default function home() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <img className="absolute" src="/image1.png" alt="imageawal" />
        {/* Navigation */}
        <nav className="px-20 bg-amber-300 w-full h-[90px] mx-auto grid grid-cols-3 justify-between items-center">
          <div className="flex flex-1 gap-3">
            <img src="/Vector1.png" alt="logo movie" />
            <h1>Movie</h1>
          </div>
          <h2 className="flex flex-1 gap-10">
            <span>Home</span> <span>Favorites</span>
          </h2>
          <form action="" className="relative">
            <img src="/Vector2.png" alt="search" className="absolute" />
            <input type="text" placeholder="Search movie" className="border border-black rounded-md w-[243px] h-[56]" />
          </form>
        </nav>

        {/* Hero */}
        <section>selmat pagi

        </section>
      </div>
    </>
  )
}