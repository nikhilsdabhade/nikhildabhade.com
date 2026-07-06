"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';

const MASCOT_CONFIG = {
  H: {
    face: { top: '30%', left: '50%' },
    leftArm: { top: '45%', left: '-0.06em' },
    rightArm: { top: '45%', right: '-0.06em' },
  },
  W: {
    face: { top: '30%', left: '50%' },
    leftArm: { top: '45%', left: '-0.06em' },
    rightArm: { top: '45%', right: '-0.06em' },
  },
};

type MascotProps = {
  letter: 'H' | 'W';
};

const MascotLetter: React.FC<MascotProps> = ({ letter }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const controls = useAnimation();
  const waveControls = useAnimation();
  const blinkControls = useAnimation();
  const smileControls = useAnimation();
  const eyeControls = useAnimation();

  const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const config = MASCOT_CONFIG[letter];

  // Blinking logic
  useEffect(() => {
    if (shouldReduceMotion) return;
    let timeout: NodeJS.Timeout;
    const blink = async () => {
      await blinkControls.start({
        scaleY: [1, 0, 1],
        transition: { duration: 0.15, times: [0, 0.5, 1] }
      });
      const nextBlink = 8000 + Math.random() * 4000;
      timeout = setTimeout(blink, nextBlink);
    };
    timeout = setTimeout(blink, 2000 + Math.random() * 1000);
    return () => clearTimeout(timeout);
  }, [blinkControls, shouldReduceMotion]);

  // Intro logic when in view
  useEffect(() => {
    let isMounted = true;

    if (isInView) {
      if (shouldReduceMotion) {
        controls.set({ y: 0, opacity: 1 });
        smileControls.set({ scaleY: 1, opacity: 1 });
        waveControls.set({ rotate: -15 });
        return;
      }

      const playIntro = async () => {
        // Drop
        controls.start({
          y: [-40, 0],
          opacity: [0, 1],
          transition: { type: "spring", bounce: 0.5, duration: 0.8 }
        });

        smileControls.set({ scaleY: 0.2, opacity: 0 });

        await new Promise(r => setTimeout(r, 400));
        if (!isMounted) return;

        // Smile and wave
        smileControls.start({
          scaleY: 1,
          opacity: 1,
          transition: { duration: 0.3 }
        });

        await waveControls.start({
          rotate: [-15, -120, -70, -120, -15],
          transition: { duration: 0.8 }
        });
        if (!isMounted) return;

        // Idle breathing
        controls.start({
          y: [0, -3, 0],
          transition: {
            duration: 3 + (letter === 'H' ? 0 : 0.5),
            repeat: Infinity,
            ease: "easeInOut"
          }
        });
      };
      playIntro();
    } else {
      controls.stop();
      waveControls.stop();
      smileControls.stop();
      controls.set({ y: -40, opacity: 0 });
      smileControls.set({ scaleY: 0.2, opacity: 0 });
    }
    return () => { isMounted = false; };
  }, [isInView, controls, waveControls, smileControls, letter, shouldReduceMotion]);

  // 10s Idle wave + look around
  useEffect(() => {
    if (shouldReduceMotion || !isInView || isHovered) return;
    let timeout: NodeJS.Timeout;

    const idleAction = async () => {
      // Wave once
      waveControls.start({
        rotate: [-15, -120, -70, -120, -15],
        transition: { duration: 0.8 }
      });

      // Look around (subtle)
      await eyeControls.start({
        x: ['0em', '-0.03em', '0.03em', '0em', '0em'],
        y: ['0em', '0em', '0em', '-0.02em', '0em'],
        transition: { duration: 2.5, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeInOut", delay: 0.8 }
      });

      timeout = setTimeout(idleAction, 10000);
    };

    timeout = setTimeout(idleAction, 10000);
    return () => clearTimeout(timeout);
  }, [isInView, shouldReduceMotion, isHovered, waveControls, eyeControls]);

  // Hover logic & tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setLocalMousePos({ x, y });
  };

  useEffect(() => {
    if (shouldReduceMotion) return;

    if (isHovered && isInView) {
      waveControls.start({
        rotate: [-15, -120, -70, -120, -15],
        transition: { duration: 0.8 }
      });
    }
  }, [isHovered, isInView, waveControls, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    if (isHovered) {
      let moveX = (localMousePos.x / 100) * 0.04;
      let moveY = (localMousePos.y / 100) * 0.04;
      moveX = Math.max(-0.04, Math.min(0.04, moveX));
      moveY = Math.max(-0.04, Math.min(0.04, moveY));

      eyeControls.start({
        x: `${moveX}em`,
        y: `${moveY}em`,
        transition: { type: 'spring', stiffness: 200, damping: 20 }
      });
    } else {
      // Smooth return to center when hover ends
      eyeControls.start({
        x: 0,
        y: 0,
        transition: { type: 'spring', stiffness: 200, damping: 20 }
      });
    }
  }, [isHovered, localMousePos, eyeControls, shouldReduceMotion]);

  return (
    <motion.span
      ref={containerRef}
      className="relative inline-block"
      animate={controls}
      style={{ originX: 0.5, originY: 1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setLocalMousePos({ x: 0, y: 0 });
      }}
    >
      <span className="relative z-10">{letter}</span>

      {/* Face */}
      <motion.div
        className="absolute z-20 flex flex-col items-center justify-center pointer-events-none"
        style={{
          top: config.face.top,
          left: config.face.left,
          x: '-50%', y: '-50%',
          width: '0.4em',
        }}
      >
        <motion.div
          className="flex justify-between w-full px-[0.05em]"
          animate={eyeControls}
        >
          <motion.div
            className="bg-current rounded-full"
            style={{ width: '0.06em', height: '0.06em', originY: 0.5 }}
            animate={blinkControls}
          />
          <motion.div
            className="bg-current rounded-full"
            style={{ width: '0.06em', height: '0.06em', originY: 0.5 }}
            animate={blinkControls}
          />
        </motion.div>
        <motion.div
          className="border-current rounded-b-full border-b-[0.03em] border-l-[0.03em] border-r-[0.03em] border-t-0 mt-[0.04em]"
          style={{ width: '0.12em', height: '0.06em', originY: 0 }}
          animate={smileControls}
        />
      </motion.div>

      {/* Left Arm */}
      <motion.div
        className="absolute z-20 bg-current pointer-events-none"
        style={{
          top: config.leftArm.top,
          left: config.leftArm.left,
          width: '0.06em',
          height: '0.22em',
          borderRadius: '0.03em',
          originX: 0.5,
          originY: 0.1,
        }}
        initial={{ rotate: 15 }}
      />

      {/* Right Arm (Waving) */}
      <motion.div
        className="absolute z-20 bg-current pointer-events-none"
        style={{
          top: config.rightArm.top,
          right: config.rightArm.right,
          width: '0.06em',
          height: '0.22em',
          borderRadius: '0.03em',
          originX: 0.5,
          originY: 0.1,
        }}
        initial={{ rotate: -15 }}
        animate={waveControls}
      />
    </motion.span>
  );
};

export const HelloWorld = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between w-full text-white px-8 md:px-42 py-8">
      <div className="flex gap-[0.4em] font-bold text-3xl md:text-5xl cursor-default select-none tracking-tight">
        <div className="flex gap-[0.2em]">
          <MascotLetter letter="H" />
          <span>ello</span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="flex-1 px-8 md:px-16 w-full flex items-center justify-center">
        {children}
      </div>

      <div className="flex gap-[0.4em] font-bold text-3xl md:text-5xl cursor-default select-none tracking-tight">
        <div className="flex gap-[0.2em]">
          <MascotLetter letter="W" />
          <span>orld</span>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
