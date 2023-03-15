import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  const { thumbnail, thumbnailAltTag, title, excerpt, slug } = blog.fields;
  return (
      <div>
        <Link href={`/blogs/${slug}`}>
          <div className="blogCard">
             
              
              
        <div className="thumbnailImg">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={300}
            height={400}
            alt={thumbnailAltTag}
          />
        </div>
        <div className="blogInfo">
          <div className="blogTitle">
            <h4>{title}</h4>
                      </div>
                      
          <div className="blogExcerpt">
            <p>{excerpt}</p>
          </div>
        </div>
              </div>
        </Link>
    </div>
  );
}
