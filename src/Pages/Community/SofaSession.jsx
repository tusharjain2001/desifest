import { useOutletContext } from "react-router-dom";

const SofaSession = () => {
  const { bgColor } = useOutletContext() || {};

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor || "#6108AA" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 opacity-90" />

      {/* Circle Effects */}
      <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-[450px] h-[450px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 top-1/2 w-[300px] h-[300px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-[Oswald] uppercase text-neon-yellow text-[60px] md:text-[120px] tracking-wide leading-none">
          SOFA <br /> SESSIONS
        </h1>

        <p className="mt-6 text-white text-lg md:text-2xl tracking-wide">
          MUSIC, UP CLOSE AND PERSONAL
        </p>
      </div>
    </section>
  );
};

export default SofaSession;