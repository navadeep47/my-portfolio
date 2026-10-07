import React from 'react';
import { X, Download } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#120724] border border-[#3d1a6e] rounded-2xl max-w-5xl w-full my-2 sm:my-4 overflow-hidden shadow-2xl relative flex flex-col h-[94vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0d0618] border-b border-[#3d1a6e]/60 shrink-0">
          <div className="flex items-center gap-2 text-xs sm:text-base font-semibold text-[#EDE9F8] truncate mr-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3FB950] shrink-0"></span>
            <span className="truncate">Pindi_Navadeep_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/Pindi_Navadeep_Resume.pdf"
              download="Pindi_Navadeep_Resume.pdf"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-[#1a0a2e] text-[#EDE9F8] border border-[#3d1a6e] text-xs sm:text-sm hover:border-[#A371F7] hover:text-[#A371F7] transition-all"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#b0a0c8] hover:text-[#EDE9F8] hover:bg-[#3d1a6e]/50 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Full-page PDF Content Body */}
        <div className="p-2 sm:p-4 bg-[#120724] flex-1 flex flex-col w-full h-full min-h-0">
          <iframe
            src="/Pindi_Navadeep_Resume.pdf#view=FitH"
            title="Pindi Navadeep Resume"
            className="w-full h-full flex-1 rounded-xl border border-[#3d1a6e]/50 bg-white"
          />
        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-4 bg-[#0d0618] border-t border-[#3d1a6e]/60 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#1a0a2e] text-[#b0a0c8] border border-[#3d1a6e] text-xs sm:text-sm font-medium hover:text-[#EDE9F8] hover:border-[#A371F7] transition-colors text-center"
          >
            Close Window
          </button>
          <a
            href="/Pindi_Navadeep_Resume.pdf"
            download="Pindi_Navadeep_Resume.pdf"
            className="btn-primary w-full sm:w-auto !py-2.5 !px-5 !text-xs sm:!text-sm inline-flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>

      </div>
    </div>
  );
}


