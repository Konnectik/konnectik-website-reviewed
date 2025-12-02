import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const size = 3 + Math.floor(Math.random() * 6); // 3-8px
        const baseOpacity = 0.18 + Math.random() * 0.22; // 0.18-0.4
        return (
          <motion.div
            key={i}
            className="absolute bg-primary rounded-full filter blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: baseOpacity,
            }}
            animate={{
              y: [0, -12 - Math.random() * 8, 0],
              opacity: [baseOpacity, Math.min(0.55, baseOpacity + 0.2), baseOpacity],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </div>
  );
};
