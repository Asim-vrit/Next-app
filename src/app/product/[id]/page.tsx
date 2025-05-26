import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function page({ params }: { params: Promise<{ id: string }> }) {
  const param = await params;
  const res = await fetch("https://fakestoreapi.com/products/" + param.id);
  const data: Product = await res.json();

  return (
    <div>
      {data.title}
      <div>{data.description}</div>
    </div>
  );
}

export default page;
