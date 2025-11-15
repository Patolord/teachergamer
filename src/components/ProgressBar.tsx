import type { RefObject } from "react";

interface ProgressBarProps {
  progressBarRef: RefObject<HTMLDivElement | null>;
  progressBarInnerRef: RefObject<HTMLDivElement | null>;
}

export default function ProgressBar({
  progressBarRef,
  progressBarInnerRef,
}: ProgressBarProps) {
  return (
    <div
      ref={progressBarRef}
      className="progress-bar fixed right-8 top-[35%] h-[30%] w-0.5 bg-[rgba(36,25,16,0.2)] z-[100]"
      style={{ opacity: 0 }}
    >
      <div
        ref={progressBarInnerRef}
        className="progress-bar-inner absolute top-0 left-0 w-full h-0 bg-[#241910] transition-[height] duration-100 ease-out"
      />
    </div>
  );
}
