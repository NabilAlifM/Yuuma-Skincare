/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ProductsClient from "../components/ProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk | Yuuma Skincare",  
  description: "Rangkaian skincare premium Yuuma berbasis bahan klinis alami Indonesia.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}