import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogArticles } from '../data/blog-articles';
import ReactMarkdown from 'react-markdown';

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const article = blogArticles.find(a => a.slug === params?.slug);

  useEffect(() => {
    if (article) {
      // Load the markdown content - map article ID to filename
      const filenameMap: Record<string, string> = {
        '1': 'blog_1_beema_bamboo.md',
        '2': 'blog_2_industry_sentiment.md',
        '3': 'blog_3_agricultural_limitations.md',
        '4': 'blog_4_graphite_patents.md',
        '5': 'blog_5_industry_development.md'
      };
      
      const filename = filenameMap[article.id];
      if (filename) {
        fetch(`/blog/${filename}`)
          .then(res => res.text())
          .then(text => {
            setContent(text);
            setLoading(false);
          })
          .catch(err => {
            console.error('Error loading article:', err);
            setLoading(false);
          });
      }
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[48px] text-white mb-4">Article Not Found</h1>
          <Link to="/insights" className="text-emerald-400 hover:text-emerald-300">← Back to Insights</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${article.title} | Power Plant Energy`}
        description={article.excerpt}
        keywords={`${article.category}, bioenergy, sustainable fuels, Power Plant Energy`}
        canonicalUrl={`https://powerplantenergy.com.au/insights/${article.slug}`}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
        
        <div className="max-w-[1200px] mx-auto px-10 relative z-10">
          <Link to="/insights" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
            <span className="mr-2">←</span> Back to Insights
          </Link>

          <div className="mb-6">
            <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-['Poppins:Medium',_sans-serif]">
              {article.category}
            </span>
          </div>

          <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[clamp(2rem,6vw,4rem)] text-white tracking-[-2px] mb-8">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-white/60 text-[16px] mb-8">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <p className="text-[20px] text-white/90 leading-[1.6] font-['Poppins:Medium',_sans-serif]">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-20">
        <div className="max-w-[900px] mx-auto px-10">
          {loading ? (
            <div className="text-center text-white/60">Loading...</div>
          ) : (
            <article className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-[48px] text-white mb-8 font-['Poppins:SemiBold',_sans-serif] tracking-[-1.92px]" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-[36px] text-white mt-16 mb-6 font-['Poppins:SemiBold',_sans-serif] tracking-[-1.44px]" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-[28px] text-white mt-12 mb-4 font-['Poppins:SemiBold',_sans-serif] tracking-[-1.12px]" {...props} />,
                  p: ({node, ...props}) => <p className="text-[18px] text-white/90 leading-[1.8] mb-6 font-['Poppins:Regular',_sans-serif]" {...props} />,
                  ul: ({node, ...props}) => <ul className="text-[18px] text-white/90 leading-[1.8] mb-6 ml-6 list-disc" {...props} />,
                  ol: ({node, ...props}) => <ol className="text-[18px] text-white/90 leading-[1.8] mb-6 ml-6 list-decimal" {...props} />,
                  li: ({node, ...props}) => <li className="mb-3" {...props} />,
                  a: ({node, ...props}) => <a className="text-emerald-400 hover:text-emerald-300 underline" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-white/80 my-8" {...props} />,
                  table: ({node, ...props}) => <div className="overflow-x-auto my-8"><table className="w-full border-collapse" {...props} /></div>,
                  th: ({node, ...props}) => <th className="border border-white/20 px-4 py-3 bg-white/5 text-left text-white font-['Poppins:SemiBold',_sans-serif]" {...props} />,
                  td: ({node, ...props}) => <td className="border border-white/20 px-4 py-3 text-white/90" {...props} />,
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          )}
        </div>
      </section>

      {/* Related Articles */}
      <section className="relative py-20 bg-gradient-to-b from-black via-emerald-950/10 to-black">
        <div className="max-w-[1200px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] text-[40px] text-white tracking-[-1.6px] mb-12">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogArticles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link key={relatedArticle.id} to={`/insights/${relatedArticle.slug}`} className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="mb-4">
                      <span className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-['Poppins:Medium',_sans-serif]">
                        {relatedArticle.category}
                      </span>
                    </div>
                    
                    <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px] font-['Poppins:SemiBold',_sans-serif]">
                      {relatedArticle.title}
                    </h3>
                    
                    <p className="text-white/80 text-[16px] leading-[1.6]">
                      {relatedArticle.excerpt}
                    </p>
                </Link>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/insights" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-['Poppins:SemiBold',_sans-serif] px-12 py-4 rounded-lg text-[18px] tracking-[-0.36px] transition-all duration-300">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
