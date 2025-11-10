import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import imgGradient from "/assets/e2d26e482ccb5c9b5eb16acb69dfbb106707d8f8.png";

interface NewsSectionProps {
  id?: string;
}

export default function NewsSection({ id }: NewsSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const articles = [
    {
      title: 'Pioneering Australia\'s Green Energy Future',
      date: 'November 2024',
      category: 'Innovation',
      excerpt: 'Power Plant Energy is leading the charge in sustainable energy solutions with groundbreaking bamboo-based technologies.',
      url: 'https://www.linkedin.com/posts/power-plant-energy_pioneering-australias-green-energy-future-activity-7389805561174978560-GUzY'
    },
    {
      title: 'New Article from Power Plant Energy',
      date: 'October 2024',
      category: 'Insights',
      excerpt: 'Discover our latest insights on sustainable fuel production and critical minerals development.',
      url: 'https://www.linkedin.com/posts/power-plant-energy_new-article-from-power-plant-energy-activity-7385340516000763905-zDob'
    },
    {
      title: 'How Do We Grow Enough to Satisfy SAF Demands?',
      date: 'September 2024',
      category: 'Analysis',
      excerpt: 'Exploring the scalability challenges and solutions for sustainable aviation fuel production from bamboo.',
      url: 'https://www.linkedin.com/posts/power-plant-energy_how-do-we-grow-enough-to-satisfy-saf-demands-activity-7363831066987585536-Nwdf'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('news-scroll-container');
    if (!container) return;

    const scrollAmount = 400;
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);

    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  return (
    <section id={id} className="relative py-32 overflow-hidden" aria-labelledby="news-heading">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={imgGradient} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />

      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">News & Insights</p>
            </div>

            <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px]">
              Latest Updates
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => handleScroll('left')}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Scrollable Articles Container */}
        <div 
          id="news-scroll-container"
          className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[400px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-8 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group block"
            >
              {/* Category Badge */}
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[12px] text-white/70 tracking-[-0.24px]">
                  {article.category}
                </p>
              </div>

              {/* Article Title */}
              <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[28px] text-white tracking-[-0.56px] mb-4 group-hover:text-white/90 transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[16px] text-white/60 tracking-[-0.32px] mb-6">
                {article.excerpt}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-white/50">
                <Calendar className="w-4 h-4" />
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[14px] tracking-[-0.28px]">
                  {article.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
