import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1920&q=80',
    title: "Achieving Net Zero Through",
    subtitle: "Circular Innovation",
    description: "Transform your business with AI-powered sustainability solutions that drive measurable impact.",
    alt: "slider-image-1: Aerial view of a lush green forest symbolizing environmental sustainability"
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80',
    title: "Powering the Future with",
    subtitle: "Intelligent Solutions",
    description: "Leading the way in sustainable technology and carbon innovation.",
    alt: "slider-image-2: Solar panels against a vibrant sunset representing renewable energy"
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    title: "Building Tomorrow's",
    subtitle: "Sustainable Economy",
    description: "Join us in creating a more sustainable future through technological innovation.",
    alt: "slider-image-3: Digital visualization of sustainable technology and innovation"
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1920&q=80',
    title: "Transforming Industries with",
    subtitle: "AI Innovation",
    description: "Harness the power of artificial intelligence to drive sustainable transformation.",
    alt: "slider-image-4: Modern wind turbines at sunset representing clean energy technology"
  }
];

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroSlides.map(slide => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden group">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-16 h-16 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative h-full"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          navigation={{
            prevEl: '.custom-swiper-button-prev',
            nextEl: '.custom-swiper-button-next',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative h-full">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading={slide.id === 1 ? "eager" : "lazy"}
              />
              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <motion.h1 
                      className="text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {slide.title}<br />
                      <span className="gradient-text">{slide.subtitle}</span>
                    </motion.h1>
                    <motion.p 
                      className="text-xl text-white/90 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              className="custom-swiper-button-prev w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform-gpu hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              className="custom-swiper-button-next w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform-gpu hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="absolute bottom-8 left-0 right-0 justify-center z-30 flex swiper-pagination"></div>
        </Swiper>
      </motion.div>
    </section>
  );
};