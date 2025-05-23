import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { ABOUT_ME } from '../data';


const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const setCanvasSize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', setCanvasSize);

    class Bubble {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      alpha: number;

      constructor(centerX: number, centerY: number) {
        this.x = centerX;
        this.y = centerY;

        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 1.5 + 0.5;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.radius = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.5 + 0.4;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.005;
        if (this.alpha <= 0) {
          Object.assign(this, new Bubble(width / 2 + 150, height / 2));
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${this.alpha})`;
        ctx.fill();
      }
    }

    const bubbles: Bubble[] = Array.from({ length: 80 }, () => new Bubble(width / 2 + 150, height / 2));

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach(bubble => {
        bubble.update();
        bubble.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/30 backdrop-blur-[2px] z-0" />

      <div className="relative container mx-auto px-4 py-16 min-h-screen flex items-center z-10">
        <div className="w-full rounded-2xl border-2 border-blue-600 dark:border-blue-400 p-1">
          <div className="w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl shadow-xl p-8">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  <span className="block">Hi, I'm  <br /><span className="text-blue-600 dark:text-blue-400">Thimmapuram Divya</span></span>
                  <TypeAnimation
                    sequence={['I am a Frontend Developer', 2000, 'I am a Fullstack Developer', 2000]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 text-2xl md:text-3xl"
                  />
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 my-6 max-w-lg mx-auto md:mx-0">
                  I am a self-assured and forward-thinking individual with a relentless drive to excel. I thrive on challenges, turning them into opportunities for growth and success. With unwavering optimism and a results-focused mindset.
                </p>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center gap-2 font-medium group"
                  >
                    Get in Touch
                    <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                  </a>
                
               <button
  onClick={() => window.open('https://i.postimg.cc/y80YWRf9/reusmephoto.png')}
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  Open Resume
</button>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-end relative z-10">
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 animate-pulse opacity-10"></div>
                  <img
                    src="https://i.postimg.cc/sXyN5wkY/photodivya.png"
                    alt="Profile"
                    className="absolute inset-2 rounded-full object-cover border-4 border-white dark:border-gray-800"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-10">
        <a href="#about" aria-label="Scroll down" className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
          <ArrowDown size={24} className="text-gray-600 dark:text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
