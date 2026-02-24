{/* Tooltip */}
<div 
  className={`absolute -top-24 left-1/2 -translate-x-1/2 px-4 py-3 bg-gray-800 rounded-lg border border-orange-500/30 whitespace-nowrap transition-all duration-300 ${
    showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
  }`}
>
  <p className="text-sm text-gray-300">
    🦀 ¿Caparazón de cangrejo? La necesitás cuando sos un dev en solitario.
  </p>
  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 border-r border-b border-orange-500/30 rotate-45" />
</div>
