"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Use the local worker shipped with the installed pdfjs-dist version.
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface Props {
  src: string;
  scrollSpeed?: number;
}

export default function AutoScrollPdf({ src, scrollSpeed = 28 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  const onLoadSuccess = useCallback(({ numPages: total }: { numPages: number }) => {
    setNumPages(total);
    setReady(false);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => {
      setWidth(Math.floor(container.clientWidth));
    };

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(container);
    requestAnimationFrame(updateWidth);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ready || paused || numPages === 0) return;

    const container = containerRef.current;
    if (!container) return;

    let animationId = 0;
    let lastTime = 0;

    const tick = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll > 0) {
        container.scrollTop += (scrollSpeed * delta) / 1000;
        if (container.scrollTop >= maxScroll - 1) {
          container.scrollTop = 0;
          lastTime = 0;
        }
      }

      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [ready, paused, numPages, scrollSpeed]);

  return (
    <div
      className="absolute inset-0 bg-[#0a1020]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-400" />
        </div>
      )}

      <div
        ref={containerRef}
        className="h-full overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <Document
          key={src}
          file={encodeURI(src)}
          onLoadSuccess={onLoadSuccess}
          loading={null}
          className="flex flex-col"
        >
          {width > 0 &&
            Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page-${index + 1}`}
                pageNumber={index + 1}
                width={width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                onRenderSuccess={() => {
                  if (index === numPages - 1) setReady(true);
                }}
              />
            ))}
        </Document>
      </div>

      {paused && ready && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-wider text-gray-300 backdrop-blur-sm">
          Paused
        </div>
      )}
    </div>
  );
}