"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function WaitingScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [key, setKey] = useState(0);
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Biến cờ hiệu để theo dõi việc tải tài nguyên thực tế
  const isAssetsReady = useRef(false);

  const resetAndShow = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(0);
    setIsDone(false);
    setIsVisible(true);
    setKey(prev => prev + 1);
    isAssetsReady.current = false; // Reset trạng thái khi chuyển trang
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    resetAndShow();
  }, [pathname, resetAndShow]);

  // Logic theo dõi tải trang thực tế
  useEffect(() => {
    if (!isVisible) return;

    const handleLoad = () => {
      isAssetsReady.current = true;
    };

    // Kiểm tra xem trang đã load xong chưa
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // CẦU CHÌ AN TOÀN: Sau 15 giây sẽ tự động ép isAssetsReady = true
    const safetyTimeout = setTimeout(() => {
      isAssetsReady.current = true;
    }, 15000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(safetyTimeout);
    };
  }, [isVisible, key]);

  // Progress animation mượt mà
  useEffect(() => {
    if (!isVisible) return;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        // Nếu đã load xong tài nguyên HOẶC hết 15s, cho chạy nhanh về 100
        if (isAssetsReady.current) {
          if (prev >= 100) {
            if (timerRef.current) clearInterval(timerRef.current);
            setTimeout(() => setIsDone(true), 100);
            return 100;
          }
          return prev + 3; // Tăng tốc khi đã xong
        }
        
        // Nếu chưa xong tài nguyên, chạy chậm dần và khựng lại ở 98% để chờ
        if (prev >= 98) return 98;
        return prev + 0.8; 
      });
    }, 50);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, key]);

  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        if (typeof window !== 'undefined') {
          document.body.style.overflow = 'auto';
        }
      }, 1600);
      return () => clearTimeout(timeout);
    }
  }, [isDone]);

  if (!isVisible) return null;

  return (
    <div 
      key={key}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-[1200ms]"
      style={{
        backgroundColor: '#020617',
        opacity: isDone ? 0 : 1,
        visibility: isDone ? 'hidden' : 'visible',
        transitionTimingFunction: 'cubic-bezier(0.45, 0, 0.55, 1)',
        pointerEvents: isDone ? 'none' : 'auto',
      }}
    >
      <div 
        className="relative w-[320px] h-[200px] mb-10 transition-transform duration-[1500ms]"
        style={{ 
          transform: isDone ? 'scale(1.1) translateY(-10px)' : 'scale(1) translateY(0)',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-500"
          style={{ opacity: isDone ? 0 : 0.1 }}
        >
          <Image src="/images/hdp-logo.png" alt="Base" fill className="object-contain grayscale" priority />
        </div>
        
        <div 
          className="absolute inset-0 z-10 transition-all"
          style={{
            clipPath: isDone ? 'none' : `inset(${100 - progress}% 0 0 0)`,
            filter: isDone 
              ? 'brightness(4) contrast(1.1) drop-shadow(0 0 40px rgba(255, 255, 255, 0.9))' 
              : 'brightness(1)',
            transitionDuration: isDone ? '600ms' : '100ms',
          }}
        >
          <Image src="/images/hdp-logo.png" alt="Filled" fill className="object-contain" priority />
        </div>
      </div>

      <div 
        className="text-center transition-opacity duration-400"
        style={{ opacity: isDone ? 0 : 1 }}
      >
        <div className="w-[280px] h-[1.5px] bg-white/10 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-[#fbbf24] transition-all duration-100 ease-linear"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 10px #fbbf24'
            }}
          />
        </div>
        
        <p 
          className="mt-[25px] text-[#fbbf24] font-normal uppercase opacity-80"
          style={{ 
            fontSize: '14px',
            letterSpacing: '8px',
          }}
        >
          {isDone ? 'Welcome to HDP Holdings' : `Finalizing Assets... ${Math.round(progress)}%`}
        </p>
      </div>
    </div>
  );
}
