"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pageSize = 6;

export default function Allblog() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  useEffect(() => {
    loadMore();
  }, []);
  function loadMore() {
    fetch(
      `https://dev.to/api/articles?username=vyan&page=${page}&per_page=${pageSize}`
    )
      .then((response) => {
        return response.json();
      })
      .then((newArticles) => {
        const updatedArticles = articles.concat(newArticles);
        setArticles(updatedArticles);
        setPage(page + 1);
        if (newArticles.length < pageSize) {
          setEnded(true);
        }
      });
  }

  return (
    <div className="container mx-auto">
      <div className="grid gap-4 md:grid lg:grid-cols-3">
        {articles.map((item) => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </div>
      {
        !ended(
          <div className="py-16 text-center" onClick={loadMore}>
            <button className="btn btn-lg btn-accent">Load more</button>
          </div>
        )
      }
    </div>
  );
}
