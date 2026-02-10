import { motion } from "framer-motion";

export const SideDecor = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
      {/* Constrained Container for "Centered" Positioning */}
      <div className="relative w-full max-w-[1400px] h-full">
        {/* Left Couplet */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 flex flex-col items-center
                     scale-75 origin-left md:scale-90 xl:scale-100
                     opacity-30 md:opacity-60 xl:opacity-100"
        >
          <div className="relative py-12 px-3 bg-brand-red/10 border border-brand-gold/30 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(178,34,34,0.2)]">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#FFD700]" />
            <h3 className="vertical-rl font-ma-shan-zheng text-3xl text-brand-gold tracking-[0.6em] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] select-none">
              龙腾沧海千万里
            </h3>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#FFD700]" />
            <div className="absolute inset-y-0 -right-2 w-[1px] bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent opacity-50" />
          </div>
        </motion.div>

        {/* Right Couplet */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 flex flex-col items-center
                     scale-75 origin-right md:scale-90 xl:scale-100
                     opacity-30 md:opacity-60 xl:opacity-100"
        >
          <div className="relative py-12 px-3 bg-brand-red/10 border border-brand-gold/30 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(178,34,34,0.2)]">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#FFD700]" />
            <h3 className="vertical-rl font-ma-shan-zheng text-3xl text-brand-gold tracking-[0.6em] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] select-none">
              马踏流光贺太平
            </h3>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_#FFD700]" />
            <div className="absolute inset-y-0 -left-2 w-[1px] bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent opacity-50" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
