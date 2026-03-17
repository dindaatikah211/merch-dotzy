import { Navbar } from "@/shared/components/commons/navbar/components/Navbar";
import { Footer } from "@/shared/components/commons/footer/Footer";
import { ProductDetail } from "@/features/products/components/ProductDetail";
import { products } from "@/features/products/services";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Meraki`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
