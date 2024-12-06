"use server";

import { redirect } from "next/navigation";

export async function navigate() {
  redirect(`/home`);
}
export async function navigateToLoginPage() {
  redirect(`/`);
}
