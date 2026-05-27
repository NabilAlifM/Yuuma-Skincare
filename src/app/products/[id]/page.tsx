import type { Metadata } from "next";
import { PRODUCTS } from "@/app/constants";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/app/components/ProductDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: "Produk tidak ditemukan" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Yuuma Skincare`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}