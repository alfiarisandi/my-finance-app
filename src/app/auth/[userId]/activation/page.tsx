import ActivationPage from "@/feature/auth/activation";
import React from "react";

export default function page({ params }: { params: { userId: string } }) {
  return <ActivationPage userId={params.userId} />;
}
