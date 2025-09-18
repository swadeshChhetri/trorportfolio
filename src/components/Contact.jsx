import React from "react";
import Button from "./common/Button";

export default function ContactForm() {
  return (
    <div
      id="contact"
      className="min-h-screen bg-black flex items-center justify-center py-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Left: Form */}
        <div className="border border-green-500 rounded-lg p-6 space-y-4 bg-black/80">
          <h2 className="text-green-400 font-jetbrains text-lg mb-4">
            [TRANSMISSION_PROTOCOL]
          </h2>

          <div>
            <label className="block font-jetbrains mb-1">[IDENTITY]</label>
            <input
              type="text"
              className="w-full bg-black border border-green-600 rounded p-2 text-green-300 font-jetbrains focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-jetbrains mb-1">
              [NEURAL_ADDRESS]
            </label>
            <input
              type="text"
              className="w-full bg-black border border-green-600 rounded p-2 text-green-300 font-jetbrains focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-jetbrains mb-1">[ORGANIZATION]</label>
            <input
              type="text"
              className="w-full bg-black border border-green-600 rounded p-2 text-green-300 font-jetbrains focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-jetbrains mb-1">[DATA_STREAM]</label>
            <textarea
              rows="4"
              className="w-full bg-black border border-green-600 rounded p-2 text-green-300 font-jetbrains focus:outline-none focus:ring focus:ring-green-400"
            ></textarea>
          </div>

          <Button variant="animated" className="w-full">
            {" "}
            [TRANSMIT_MESSAGE]
          </Button>
        </div>

        {/* Right: Cards */}
        <div className="flex flex-col space-y-6">
          {/* Card 1 */}
          <div className="border border-green-500 rounded-lg p-6 bg-black/80">
            <h2 className="text-green-400 font-jetbrains mb-4">
              [CONNECTION_NODES]
            </h2>
            <div className="font-jetbrains space-y-3">
              <p>
                <span className="">[PHYSICAL_COORDINATES]</span>
                <br />
                Neural Nexus Tower
                <br />
                Silicon Valley, CA 94301
              </p>
              <p>
                <span className="text-green-400">[VOICE_CHANNEL]</span>
                <br />
                +1 (555) NEURAL-1
              </p>
              <p>
                <span className="text-green-400">[DIGITAL_GATEWAY]</span>
                <br />
                consciousness@tror.ai
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-green-500 rounded-lg p-6 bg-black/80">
            <h2 className="text-green-400 font-jetbrains mb-4">
              [OPERATIONAL_CYCLES]
            </h2>
            <div className="font-jetbrains space-y-2">
              <p>
                MON - FRI <span className="float-right">09:00 - 18:00 PST</span>
              </p>
              <p>
                SATURDAY <span className="float-right">10:00 - 16:00 PST</span>
              </p>
              <p>
                SUNDAY <span className="float-right text-red-500">OFFLINE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
