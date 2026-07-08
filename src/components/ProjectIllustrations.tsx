import { motion } from "motion/react";
import { Cpu, Server, Wifi, Activity, Navigation, Fingerprint, RefreshCw } from "lucide-react";

interface IllustrationProps {
  className?: string;
  isHovered: boolean;
}

export function AMRIllustration({ className = "", isHovered }: IllustrationProps) {
  return (
    <div className={`relative w-full h-40 bg-slate-900 dark:bg-slate-950 rounded-t-xl overflow-hidden flex items-center justify-center border-b border-slate-800 ${className}`}>
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      
      {/* Scanning radar rays */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-sky-500/10"
        animate={{ scale: isHovered ? [1, 1.4, 1] : 1, opacity: isHovered ? [0.6, 0.1, 0.6] : 0.4 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-teal-500/5"
        animate={{ scale: isHovered ? [1, 1.2, 1] : 1, opacity: isHovered ? [0.4, 0.05, 0.4] : 0.2 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Target markers */}
      <div className="absolute top-8 left-1/4 w-2 h-2 rounded-full bg-teal-500 shadow-lg shadow-teal-500/50" />
      <div className="absolute bottom-10 right-1/4 w-2 h-2 rounded-full bg-sky-500 shadow-lg shadow-sky-500/50" />

      {/* Navigation Path */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M 100 110 C 130 60, 220 120, 260 50" 
          fill="none" 
          stroke="url(#blueTealGrad)" 
          strokeWidth="2" 
          strokeDasharray="6,4"
          animate={{ strokeDashoffset: isHovered ? -20 : 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="blueTealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Robot Graphic */}
      <motion.div 
        className="relative z-10 w-16 h-16 bg-slate-800 rounded-lg border border-sky-500/30 flex flex-col items-center justify-center p-1 shadow-2xl"
        animate={{ 
          x: isHovered ? [0, 8, -4, 0] : 0,
          y: isHovered ? [0, -6, 4, 0] : 0,
          rotate: isHovered ? [0, 5, -5, 0] : 0
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Scanning beam */}
        <motion.div 
          className="absolute -top-1 w-full h-0.5 bg-sky-400 shadow-[0_0_8px_rgba(14,165,233,1)]"
          animate={{ scaleX: [0.2, 0.9, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="w-full flex justify-between px-1 text-sky-400">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
        </div>
        
        <Navigation className="w-6 h-6 text-teal-400 mt-1 rotate-45" />
        
        <div className="w-10 h-1 bg-slate-700 rounded-full mt-1.5 overflow-hidden">
          <div className="w-2/3 h-full bg-teal-400 rounded-full" />
        </div>
      </motion.div>
      
      {/* Title Tag */}
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400">
        <Server className="w-3 h-3 text-sky-400" />
        AMR CTRL
      </div>
    </div>
  );
}

export function LEDIllustration({ className = "", isHovered }: IllustrationProps) {
  return (
    <div className={`relative w-full h-40 bg-slate-900 dark:bg-slate-950 rounded-t-xl overflow-hidden flex items-center justify-center border-b border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

      {/* System wiring diagram */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M 40 80 H 130 V 110 M 130 80 H 170 V 110 M 130 80 H 210 V 110" fill="none" stroke="#334155" strokeWidth="1.5" />
        <path d="M 40 80 V 120 H 90" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
      </svg>

      {/* Raspberry Pi representation */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-12 bg-emerald-950 border border-emerald-500/20 rounded flex items-center justify-center p-1.5">
        <div className="grid grid-cols-4 gap-0.5 w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-slate-800 rounded-sm border border-slate-700 text-[6px] text-center text-emerald-400 flex items-center justify-center font-mono">
              GPIO
            </div>
          ))}
        </div>
        <Cpu className="absolute w-4 h-4 text-emerald-400 opacity-60" />
      </div>

      {/* 3 LEDs and Buzzer */}
      <div className="flex gap-4 ml-16 relative z-10">
        {/* Red LED */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-4 h-6 rounded-t-full bg-red-600 border border-red-500/50 relative"
            animate={{ 
              boxShadow: isHovered 
                ? ["0 0 0px rgba(239,68,68,0)", "0 0 16px rgba(239,68,68,0.8)", "0 0 0px rgba(239,68,68,0)"]
                : "0 0 2px rgba(239,68,68,0.2)"
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute top-1 left-1 w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
          <span className="text-[9px] font-mono text-slate-500 mt-1">RED</span>
        </div>

        {/* Yellow LED */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-4 h-6 rounded-t-full bg-yellow-600 border border-yellow-500/50 relative"
            animate={{ 
              boxShadow: isHovered 
                ? ["0 0 0px rgba(234,179,8,0)", "0 0 12px rgba(234,179,8,0.6)", "0 0 0px rgba(234,179,8,0)"]
                : "0 0 2px rgba(234,179,8,0.2)"
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <div className="absolute top-1 left-1 w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
          <span className="text-[9px] font-mono text-slate-500 mt-1">YLW</span>
        </div>

        {/* Green LED */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-4 h-6 rounded-t-full bg-emerald-600 border border-emerald-500/50 relative"
            animate={{ 
              boxShadow: isHovered 
                ? ["0 0 0px rgba(16,185,129,0)", "0 0 12px rgba(16,185,129,0.5)", "0 0 0px rgba(16,185,129,0)"]
                : "0 0 2px rgba(16,185,129,0.2)"
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <div className="absolute top-1 left-1 w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
          <span className="text-[9px] font-mono text-slate-500 mt-1">GRN</span>
        </div>

        {/* Speaker Buzzer */}
        <div className="flex flex-col items-center ml-2">
          <div className="w-7 h-7 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center relative">
            <Wifi className="w-4 h-4 text-sky-400 rotate-90" />
            {isHovered && (
              <motion.div 
                className="absolute -inset-1 rounded-full border border-sky-500/30"
                animate={{ scale: [1, 1.4], opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
              />
            )}
          </div>
          <span className="text-[9px] font-mono text-slate-500 mt-1">BUZZ</span>
        </div>
      </div>

      <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400">
        <Cpu className="w-3 h-3 text-emerald-400" />
        GPIO v5
      </div>
    </div>
  );
}

export function MonitoringIllustration({ className = "", isHovered }: IllustrationProps) {
  return (
    <div className={`relative w-full h-40 bg-slate-900 dark:bg-slate-950 rounded-t-xl overflow-hidden flex items-center justify-center border-b border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

      {/* Live Chart Container */}
      <div className="w-11/12 h-28 bg-slate-950/80 rounded border border-slate-800 p-2 flex flex-col justify-between relative">
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-1">
          <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
            NODE_01: ENV_MONITOR
          </span>
          <div className="flex gap-2 text-[8px] font-mono">
            <span className="text-teal-400">24.5°C</span>
            <span className="text-sky-400">58% RH</span>
          </div>
        </div>

        {/* Chart plot */}
        <div className="relative flex-1 mt-2 flex items-end">
          <svg className="w-full h-12" viewBox="0 0 100 40">
            {/* Grid Lines */}
            <line x1="0" y1="10" x2="100" y2="10" stroke="#1e293b" strokeWidth="0.5" />
            <line x1="0" y1="20" x2="100" y2="20" stroke="#1e293b" strokeWidth="0.5" />
            <line x1="0" y1="30" x2="100" y2="30" stroke="#1e293b" strokeWidth="0.5" />
            
            {/* Plot path */}
            <motion.path 
              d="M 0 30 Q 15 15, 30 25 T 60 10 T 90 22 T 100 15" 
              fill="none" 
              stroke="#14b8a6" 
              strokeWidth="1.5"
              animate={{ 
                pathLength: isHovered ? [0.2, 1] : 1,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Glow duplicate path */}
            <path 
              d="M 0 30 Q 15 15, 30 25 T 60 10 T 90 22 T 100 15" 
              fill="none" 
              stroke="#14b8a6" 
              strokeWidth="4" 
              className="opacity-15 blur-sm"
            />
            
            {/* Scanning point */}
            <motion.circle 
              cx="100" 
              cy="15" 
              r="2.5" 
              fill="#14b8a6" 
              animate={{ r: isHovered ? [2.5, 5, 2.5] : 2.5 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
        </div>

        {/* Warning Alert Banner overlay if hovered */}
        {isHovered && (
          <motion.div 
            className="absolute inset-x-2 bottom-2 bg-emerald-500/10 border border-emerald-500/20 py-1 px-2 rounded flex justify-between items-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[8px] font-mono text-emerald-400">THRESHOLD CHECK: OK</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>
        )}
      </div>

      <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400">
        <Server className="w-3 h-3 text-teal-400" />
        DHT-22 NODE
      </div>
    </div>
  );
}

export function AGVIllustration({ className = "", isHovered }: IllustrationProps) {
  return (
    <div className={`relative w-full h-40 bg-slate-900 dark:bg-slate-950 rounded-t-xl overflow-hidden flex items-center justify-center border-b border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

      {/* Network Nodes map */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Connection lines */}
        <line x1="50" y1="50" x2="130" y2="100" stroke="#334155" strokeWidth="1.5" />
        <line x1="130" y1="100" x2="220" y2="40" stroke="#334155" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="220" y2="40" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" />
        
        {/* Path highlight on hover */}
        {isHovered && (
          <motion.line 
            x1="50" y1="50" x2="130" y2="100" 
            stroke="#0ea5e9" 
            strokeWidth="2" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        )}
        {isHovered && (
          <motion.line 
            x1="130" y1="100" x2="220" y2="40" 
            stroke="#0ea5e9" 
            strokeWidth="2" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        )}

        {/* Nodes */}
        <circle cx="50" cy="50" r="5" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        <circle cx="130" cy="100" r="5" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        <circle cx="220" cy="40" r="5" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        
        {/* Node Labels */}
        <text x="45" y="38" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">P1</text>
        <text x="125" y="115" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">P2</text>
        <text x="215" y="28" fill="#64748b" fontSize="8" fontFamily="var(--font-mono)">P3</text>
      </svg>

      {/* Moving AGV */}
      <motion.div 
        className="absolute w-10 h-7 bg-slate-800 border-2 border-sky-500 rounded-sm flex flex-col justify-between p-0.5 shadow-md shadow-sky-500/20"
        style={{ left: 50, top: 50 }}
        animate={isHovered ? {
          left: [50, 130, 220],
          top: [50, 100, 40],
          x: [-20, -20, -20],
          y: [-14, -14, -14]
        } : {
          left: 130,
          top: 100,
          x: -20,
          y: -14
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex justify-between">
          <div className="w-1.5 h-1 bg-amber-400 rounded-full animate-pulse" />
          <div className="w-1.5 h-1 bg-amber-400 rounded-full animate-pulse" />
        </div>
        <div className="text-[6px] font-mono text-center text-sky-400">AGV_05</div>
      </motion.div>

      <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400">
        <RefreshCw className="w-3 h-3 text-sky-400 animate-spin" style={{ animationDuration: '4s' }} />
        ROUTE NAV
      </div>
    </div>
  );
}

export function CanteenIllustration({ className = "", isHovered }: IllustrationProps) {
  return (
    <div className={`relative w-full h-40 bg-slate-900 dark:bg-slate-950 rounded-t-xl overflow-hidden flex items-center justify-center border-b border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

      <div className="flex gap-6 items-center relative z-10">
        {/* Fingerprint panel */}
        <div className="w-16 h-20 bg-slate-950 border border-slate-800 rounded-lg p-2 flex flex-col items-center justify-between shadow-2xl relative overflow-hidden">
          <span className="text-[7px] font-mono text-slate-500">BIOMETRIC</span>
          
          <div className="relative w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded">
            <Fingerprint className="w-8 h-8 text-teal-400" />
            
            {/* Scanner line animation */}
            <motion.div 
              className="absolute left-0 right-0 h-0.5 bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,1)]"
              animate={{ 
                top: ["10%", "90%", "10%"]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <span className="text-[7px] font-mono text-teal-400 flex items-center gap-1">
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-teal-400"
            />
            READY
          </span>
        </div>

        {/* Action arrow */}
        <div className="flex items-center">
          <motion.svg 
            className="w-8 h-8 text-slate-600" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            animate={{ x: isHovered ? [0, 4, 0] : 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
        </div>

        {/* Meal Verification Ticket */}
        <div className="w-16 h-20 bg-slate-950 border border-slate-800 rounded-lg p-1.5 flex flex-col justify-between shadow-2xl">
          <div className="border-b border-dashed border-slate-800 pb-1">
            <div className="text-[6px] font-mono text-slate-500">MEAL VERIFY</div>
            <div className="text-[8px] font-mono text-sky-400 font-bold">#A-043</div>
          </div>
          
          <div className="space-y-0.5 my-1">
            <div className="w-10 h-1 bg-slate-800 rounded-full" />
            <div className="w-8 h-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-1 bg-slate-800 rounded-full" />
          </div>

          <motion.div 
            className="bg-sky-500/10 border border-sky-500/20 py-0.5 rounded text-center text-[7px] font-mono text-sky-400"
            animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
          >
            CONFIRMED
          </motion.div>
        </div>
      </div>

      <div className="absolute top-2 right-2 flex items-center gap-1 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400">
        <Fingerprint className="w-3 h-3 text-teal-400" />
        AS516 BIO
      </div>
    </div>
  );
}
