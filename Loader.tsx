import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <div
              className="absolute -inset-8 animate-spin-slow rounded-full opacity-70 blur-2xl"
              style={{ background: "conic-gradient(from 0deg, #ff4fa3, #d4af37, #ff7ab8, #ff4fa3)" }}
            />
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative font-display text-3xl tracking-[0.4em] text-gradient-luxe sm:text-5xl"
            >
              HARINISHRII
            </motion.div>
            <div className="mt-4 h-px w-full overflow-hidden bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2 }}
                className="h-full"
                style={{ background: "var(--gradient-luxe)" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
