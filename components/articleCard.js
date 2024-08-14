import Link from "next/link";
import Image from "next/image";

const ArticleCard = (article) => {
  return (
    <div className="shadow-lg card bg-base-100" key={article.id}>
      <div className="card-body">
        <div className="flex gap-2">
          {article.tag_list.map((tag) => (
            <div className="badge badge-primary">{tag}</div>
          ))}
        </div>
        <Image src={article.social_iamge} width={500} height={500} />
        <div className="badge badge-primary text-blue">
          {article.tag_list[0]}
        </div>
        <Link href={article.url} target="_blank">
          {article.title}
        </Link>
        <div>
          <Image src={article.user.profile_image_90} width={50} height={50} />
          <div>{article.user.name}</div>
          <div>{article.published_at}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
