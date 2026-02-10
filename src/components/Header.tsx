import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6 pt-12 md:pt-20"
    >
      {/* Badge */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-gold to-brand-red opacity-30 blur group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-6 py-2 bg-black/40 backdrop-blur-xl border border-brand-gold/30 rounded-full flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span className="text-brand-gold font-medium tracking-wide text-sm">
            万象更新
          </span>
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center relative">
        <h1 className="text-7xl md:text-9xl font-ma-shan-zheng text-transparent bg-clip-text bg-gradient-to-b from-brand-gold to-yellow-600 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
          赛博马年 · 2026
        </h1>
        <div className="absolute top-0 right-[-40px] rotate-12 bg-brand-red text-white text-xs px-2 py-1 rounded font-mono border border-brand-gold/50">
          甲午年
        </div>
      </div>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl font-space-grotesk text-brand-dim tracking-[0.2em] uppercase flex items-center gap-4">
        <span className="h-[1px] w-12 bg-gradient-to-l from-brand-gold/50 to-transparent"></span>
        AI 驱动 · 数字贺词
        <span className="h-[1px] w-12 bg-gradient-to-r from-brand-gold/50 to-transparent"></span>
      </h2>
    </motion.header>
  );
};
