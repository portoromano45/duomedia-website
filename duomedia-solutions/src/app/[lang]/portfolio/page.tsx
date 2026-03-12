import { getDictionary } from "@/lib/i18n/getDictionary";
import PortfolioClient from "./PortfolioClient";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <PortfolioClient dict={dict} />;
}
