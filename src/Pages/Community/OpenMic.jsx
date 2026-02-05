import { useOutletContext } from "react-router-dom";

const OpenMic = () => {
  const { bgColor } = useOutletContext();

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-lime-400 opacity-80" />

      {/* Circle Effect */}
      <div className="absolute right-20 top-20 w-[500px]  h-[500px] border border-white/20 rounded-full" />
      <div className="absolute right-32 top-32 w-[400px]  h-[400px] border border-white/10 rounded-full" />
      <div className="absolute right-44 top-44 w-[300px]  h-[300px] border border-white/5 rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-[Oswald] uppercase text-neon-yellow text-[60px] md:text-[120px] tracking-widest">
          OPEN — MIC
        </h1>

        <p className="mt-6 text-white text-lg md:text-2xl tracking-wide">
          WHERE NEW VOICES TAKE THEIR FIRST STEP
        </p>
      </div>
    </section>
  );
};

export default OpenMic;