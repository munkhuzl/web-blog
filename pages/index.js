"use client";
import ArticleCard from "@/components/articleCard";
import { useEffect, useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [ended, setEnded] = useState(false);

  const tags = [
    { value: "beginners", name: "Design" },
    { value: "frontend", name: "Travel" },
    { value: "javascript", name: "Fashion" },
    { value: "webdev", name: "Technology" },
    { value: "express", name: "Branding" },
    { value: "all", name: "Design" },
  ];

  function loadMore() {
    async function loadInitialArticles() {
      setLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?username=vyan&page=${selectedCategorypage}&per_page=1`
      );
      const tagArticles = await response.json();
      setArticles(tagArticles);
      setPage(1);
      setLoading(false);
    }

  async function loadNextArticles() {
    setLoading(true);
    const nextPage = page + 1;

    const response = await fetch(
      `https://dev.to/api/articles?username=vyan&page=${selectedCategory}&per_page=${nextPage}`
    );
    const nextArticles = await response.json();
    setArticles([...articles, ...nextArticles]);
    setPage(nextPage);
    setLoading(false);
  }

  useEffect(() => {
    loadNextArticles();
  }, [selectedCategory]);

  return (
    <div>
      hi
      <div>All Blog Post</div>
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid lg:grid-cols-3">
          {articles.map((item) => (
            <ArticleCard key={item.id} article={item} />
          ))}
        </div>
        {!ended && (
          <div className="py-16 text-center">
            <button
              disabled={loading}
              className="btn btn-lg btn-accent"
              onClick={loadNextArticles}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
}
export default Index;
