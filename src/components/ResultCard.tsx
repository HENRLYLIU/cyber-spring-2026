import { motion, AnimatePresence } from "framer-motion";
import { Copy, RefreshCw, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

interface ResultCardProps {
  isVisible: boolean;
  isLoading: boolean;
  content: string;
  onRegenerate: () => void;
}

export const ResultCard = ({
  isVisible,
  isLoading,
  content,
  onRegenerate,
}: ResultCardProps) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setLogs([]);
      setShowContent(false);

      const sequence = [
        { text: "> 正在初始化神经网络...", delay: 200 },
        { text: "> 正在连接赛博马年数据库...", delay: 800 },
        { text: "> 正在分析目标对象特征...", delay: 1500 },
        { text: "> 正在生成场景化贺词...", delay: 2200 },
      ];

      let timeoutIds: ReturnType<typeof setTimeout>[] = [];

      sequence.forEach(({ text, delay }) => {
        const id = setTimeout(() => {
          setLogs((prev) => [...prev, text]);
        }, delay);
        timeoutIds.push(id);
      });

      return () => timeoutIds.forEach(clearTimeout);
    } else if (content) {
      // 当 loading 结束且有内容时，显示所有 logs 并显示内容
      setLogs([
        "> 正在初始化神经网络...",
        "> 正在连接赛博马年数据库...",
        "> 正在分析目标对象特征...",
        "> 正在生成场景化贺词...",
        "> 生成完毕 // SUCCESS",
      ]);
      setShowContent(true);
    }
  }, [isLoading, content]);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto mt-8 perspective-1000"
    >
      <div className="bg-black/80 border border-brand-gold/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.1)] relative min-h-[300px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs font-mono text-brand-dim flex items-center gap-1">
              <Terminal className="w-3 h-3" />
              success_stream_2026.exe
            </span>
          </div>
          <div className="text-[10px] font-mono text-brand-gold/50">
            V.2.0.2.6 ALPHA
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 font-mono relative flex flex-col h-full">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent animate-scan" />

          {/* Logs Area */}
          <div className="space-y-2 text-brand-text/90 leading-relaxed font-mono text-sm mb-4">
            {logs.map((log, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-green-500"
              >
                {log}
              </motion.p>
            ))}
            {isLoading && (
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-green-500 ml-1 align-middle"
              />
            )}
          </div>

          {/* Final Generated Result */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="pl-4 border-l-2 border-brand-gold/30 py-2 my-6 bg-brand-gold/5 rounded-r-lg">
                  <p className="text-xl md:text-2xl font-ma-shan-zheng text-brand-gold mb-2 leading-relaxed">
                    {content}
                  </p>
                </div>

                <div className="text-brand-dim text-xs mt-6 flex justify-end gap-2 border-t border-white/5 pt-4">
                  <span className="text-brand-gold/50">mode: GENERATIVE</span>
                  <span>置信度: 99.8%</span>
                  <span>延迟: 1337ms</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Actions - Only show when content is ready */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 divide-x divide-white/5 border-t border-white/5 bg-white/[0.02]"
          >
            <button
              onClick={onRegenerate}
              className="py-4 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm text-brand-dim hover:text-brand-gold group"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span className="hidden md:inline">重新生成</span>
            </button>
            <button
              onClick={handleCopy}
              className="py-4 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm text-brand-dim hover:text-brand-gold"
            >
              {copied ? (
                <span className="text-green-500 font-bold animate-pulse">
                  已复制!
                </span>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="hidden md:inline">复制文本</span>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
