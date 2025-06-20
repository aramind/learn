import React from "react";

type DocsProps = {
  params: Promise<{ slug: string[] }>;
};
const Docs = async ({ params }: DocsProps) => {
  const { slug } = await params;

  console.log(slug);
  //if the route is something like this /docs/review/feature/2
  //this will logs ['review', 'feature', '2']

  if (slug) {
    return <div>{slug.join("/")}</div>;
  } else {
    return <div>Docs Home Page</div>;
  }
};

export default Docs;
