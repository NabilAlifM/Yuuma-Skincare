import type { Metadata } from "next";
import HomeClient from "@/app/components/HomeClient";

export const metadata: Metadata = {
  title: "Home | Yuuma Skincare",
  description: "Yuuma Skincare — Your Skin, Your Story.",
};

export default function Page() {
  return <HomeClient />;
}