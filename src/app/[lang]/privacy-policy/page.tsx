import { getDictionary } from "@/lib/i18n/getDictionary";
import { PrivacyContent } from "@/app/components/layout/PrivacyContent";

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-background">
      <PrivacyContent dict={dict} />
    </main>
  );
}
