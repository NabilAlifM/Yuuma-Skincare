/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from "next";
import StoryClient from "../components/StoryClient";


export const metadata: Metadata = {
  title: "Our Story",
  description: "Perjalanan Yuuma — dari klinik ke kehidupan sehari-hari.",
};

export default function StoryPage() {
    return (
        <StoryClient />
    );
}