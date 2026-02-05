import { useOutletContext } from "react-router-dom";

const OpenMic = () => {
  const { bgColor } = useOutletContext();

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        
      </div>
      


    </section>
  );
};

export default OpenMic;