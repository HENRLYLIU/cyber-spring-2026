import { motion } from "framer-motion";
import {
  Bot,
  Keyboard,
  Send,
  Users,
  User,
  Briefcase,
  Heart,
  Cpu,
} from "lucide-react";
import { useState } from "react";

const TAGS = [
  { icon: User, label: "长辈", id: "elder" },
  { icon: Briefcase, label: "上司", id: "boss" },
  { icon: Users, label: "朋友", id: "friend" },
  { icon: Heart, label: "爱人", id: "lover" },
  { icon: Cpu, label: "晚辈", id: "junior" },
];

// Update Props definition for correct type checking
export const Hero = ({
  onGenerate,
}: {
  onGenerate: (tag: string, keyword: string) => void;
}) => {
  const [selectedTag, setSelectedTag] = useState<string>("elder");
  const [keyword, setKeyword] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="relative w-full max-w-2xl mx-auto p-[1px] rounded-3xl bg-gradient-to-b from-brand-gold/30 via-brand-red/10 to-transparent"
    >
      <div className="bg-[#1a1a1a]/90 backdrop-blur-xl rounded-[23px] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Section 1: Target Audience */}
          <div className="space-y-4">
            <label className="text-brand-dim text-sm uppercase tracking-wider font-space-grotesk flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              目标对象 // 你想要给谁？
            </label>
            <div className="flex flex-wrap gap-3">
              {TAGS.map(({ icon: Icon, label, id }) => (
                <button
                  key={id}
                  onClick={() => setSelectedTag(id)}
                  className={`
                    px-4 py-3 rounded-xl border flex items-center gap-2 transition-all duration-300
                    ${
                      selectedTag === id
                        ? "bg-brand-gold/10 border-brand-gold text-brand-gold shadow-[0_0_15px_rgba(255,215,0,0.15)]"
                        : "border-white/10 text-brand-dim hover:border-white/30 hover:bg-white/5"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Keywords */}
          <div className="space-y-4">
            <label className="text-brand-dim text-sm uppercase tracking-wider font-space-grotesk flex items-center gap-2">
              <Keyboard className="w-4 h-4" />
              关键词 // 添加关键词
            </label>
            <div className="relative group">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="如：二马当先、龙马精神..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 pl-12 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all font-inter"
              />
              <Bot className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dim group-focus-within:text-brand-gold transition-colors" />
            </div>
          </div>

          {/* Primary Action */}
          <button
            onClick={() => onGenerate(selectedTag, keyword)}
            className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-red to-red-700 p-[1px] active:scale-[0.99] transition-transform"
          >
            <div className="relative bg-black/10 hover:bg-white/10 transition-colors rounded-[11px] px-8 py-4 flex items-center justify-center gap-3">
              <span className="font-bold text-lg tracking-widest text-white uppercase font-ma-shan-zheng">
                开启 AI 研磨
              </span>
              <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
            {/* Shimmer Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
