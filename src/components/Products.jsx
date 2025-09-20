import Button from "./common/Button";
import Motion from "./common/Motion";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4 sm:px-6 md:px-8"
    >
      {/* LEFT SIDE */}
      <div className="max-w-xl flex-1">
        <div className="mx-auto text-center md:mx-0 md:text-left">
          <p className="text-green-400 font-jetbrains">[FLAGSHIP_PRODUCT]</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-4">
            QYOOB.AI
          </h1>
        </div>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          The world’s first truly autonomous enterprise AI agent platform. Qyoob
          doesn’t just automate tasks—it thinks, learns, and acts like your most
          capable team members, 24/7.
        </p>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
          From complex decision-making to creative problem-solving, Qyoob agents
          understand context, anticipate needs, and deliver results that exceed
          human expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button variant="animated">[REQUEST_DEMO]</Button>
          <Button>[EXPLORE_AGENTS]</Button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-22 md:mt-0 w-full max-w-[500px] mx-auto md:mx-0">
        <Motion height="min-h-[426px]">
          <div className="md:mt-0 relative rounded-2xl p-4 md:p-6 flex-1 w-full max-w-full flex flex-col items-center md:items-start md:max-w-[500px] h-full">
            {/* Heading */}
            <p className="text-green-400 font-jetbrains mb-3 text-center md:text-left text-sm md:text-base">
              [SYSTEM_ARCHITECTURE]
            </p>

            {/* Data Stream */}
            <ul className="text-green-400 font-jetbrains text-xs sm:text-sm md:text-sm mb-4 opacity-80 text-center md:text-left">
              <li>&gt; Processing: 2.3M operations/sec</li>
              <li>&gt; Active Agents: 847</li>
              <li>&gt; Learning Rate: 99.7%</li>
            </ul>

            {/* Orbital Animation */}
            <div className="relative flex items-center justify-center w-full">
              {/* Center AI circle */}
              <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center font-bold">
                AI
              </div>

              {/* Medium orbit */}
              <div className="absolute w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 border border-gray-600 rounded-full animate-[spin_12s_linear_infinite] opacity-80">
                <span className="absolute w-4 sm:w-6 md:w-6 h-4 sm:h-6 md:h-6 bg-green-400 rounded-full -top-2 left-1/2 -translate-x-1/2"></span>
                <span className="absolute w-4 sm:w-6 md:w-6 h-4 sm:h-6 md:h-6 bg-yellow-400 rounded-full top-1/2 -right-2 -translate-y-1/2"></span>
                <span className="absolute w-4 sm:w-6 md:w-6 h-4 sm:h-6 md:h-6 bg-blue-400 rounded-full -bottom-2 left-1/2 -translate-x-1/2"></span>
                <span className="absolute w-4 sm:w-6 md:w-6 h-4 sm:h-6 md:h-6 bg-purple-400 rounded-full top-1/2 -left-2 -translate-y-1/2"></span>
              </div>

              {/* Small orbit */}
              <div className="absolute w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 border border-gray-700 rounded-full animate-[spin_20s_linear_infinite_reverse] opacity-50">
                <span className="absolute w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 bg-red-400 rounded-full -top-1 left-1/3"></span>
                <span className="absolute w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 bg-blue-300 rounded-full top-1/4 -right-1"></span>
                <span className="absolute w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 bg-yellow-300 rounded-full bottom-1/4 -right-1"></span>
                <span className="absolute w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 bg-pink-400 rounded-full -bottom-1 left-1/3"></span>
                <span className="absolute w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 bg-green-400 rounded-full bottom-1/4 -left-1"></span>
                <span className="absolute w-2 sm:w-3 md:w-3 h-2 sm:h-3 md:h-3 bg-purple-300 rounded-full top-1/4 -left-1"></span>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
