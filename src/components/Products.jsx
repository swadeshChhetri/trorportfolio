import Button from "./common/Button";
import Motion from "./common/Motion";

export default function Products() {
  return (
    <>
      <section
        id="products"
        className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-between py-20"
      >
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <div className="mx-auto text-center md:mx-0 md:text-left">
          <p className="text-green-400 font-jetbrains">[FLAGSHIP_PRODUCT]</p>
          <h1 className="text-5xl font-bold my-4">QYOOB.AI</h1>
          </div>
          <p className="text-gray-400 mb-6">
            The world’s first truly autonomous enterprise AI agent platform.
            Qyoob doesn’t just automate tasks—it thinks, learns, and acts like
            your most capable team members, 24/7.
          </p>
          <p className="text-gray-400 mb-8">
            From complex decision-making to creative problem-solving, Qyoob
            agents understand context, anticipate needs, and deliver results
            that exceed human expectations.
          </p>
          <div className="flex gap-4">
            <Button variant="animated">[REQUEST_DEMO]</Button>
            <Button>[EXPLORE_AGENTS]</Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <Motion>
          <div className="mt-12 md:mt-0 relative rounded-2xl p-2 w-[420px] h-[420px] flex flex-col items-start">
            {/* Heading */}
            <p className="text-green-400 font-jetbrains mb-3">
              [SYSTEM_ARCHITECTURE]
            </p>

            {/* Data Stream */}
            <ul className="text-green-400 font-jetbrains text-xs mb-4 opacity-80">
              <li>&gt; Processing: 2.3M operations/sec</li>
              <li>&gt; Active Agents: 847</li>
              <li>&gt; Learning Rate: 99.7%</li>
            </ul>

            {/* Orbital Animation */}
            <div className="relative flex items-center justify-center flex-1 w-full">
              {/* Center AI circle */}
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center font-bold opacity-100 ">
                AI
              </div>

              {/* 4 medium balls - clockwise */}
              <div className="absolute w-48 h-48 border border-gray-600 rounded-full animate-[spin_12s_linear_infinite] opacity-80">
                <span className="absolute w-6 h-6 bg-green-400 rounded-full -top-3 left-1/2 -translate-x-1/2"></span>
                <span className="absolute w-6 h-6 bg-yellow-400 rounded-full top-1/2 -right-3 -translate-y-1/2"></span>
                <span className="absolute w-6 h-6 bg-blue-400 rounded-full -bottom-3 left-1/2 -translate-x-1/2"></span>
                <span className="absolute w-6 h-6 bg-purple-400 rounded-full top-1/2 -left-3 -translate-y-1/2"></span>
              </div>

              {/* 6 small balls - anti-clockwise */}
              <div className="absolute w-72 h-72 border border-gray-700 rounded-full animate-[spin_20s_linear_infinite_reverse] opacity-50">
                <span className="absolute w-3 h-3 bg-red-400 rounded-full -top-1 left-1/3"></span>
                <span className="absolute w-3 h-3 bg-blue-300 rounded-full top-1/4 -right-1"></span>
                <span className="absolute w-3 h-3 bg-yellow-300 rounded-full bottom-1/4 -right-1"></span>
                <span className="absolute w-3 h-3 bg-pink-400 rounded-full -bottom-1 left-1/3"></span>
                <span className="absolute w-3 h-3 bg-green-400 rounded-full bottom-1/4 -left-1"></span>
                <span className="absolute w-3 h-3 bg-purple-300 rounded-full top-1/4 -left-1"></span>
              </div>
            </div>
          </div>
        </Motion>
      </section>
    </>
  );
}
