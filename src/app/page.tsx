import { redirect } from "next/navigation";
import { defaultLocale } from "@/content";

/** La raíz redirige al idioma por defecto. */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
