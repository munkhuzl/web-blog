"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Trending = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=vyan")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid gap-4 md:grid lg:grid-cols-3 sm:grid-row">
        {articles.map((item) => (
          <div className="shadow-lg card bg-base-100" key={item.id}>
            <div className="card-body">
              <Image
                src={item.social_iamge}
                width={500}
                height={500}
                className="object-fit relative "
              />
              <div className="badge badge-primary text-blue absolute">
                {item.tag_list[0]}
              </div>
              {/* <Link href={item.url} target="_blank" className="absolute mt-10">
                {item.title}
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
