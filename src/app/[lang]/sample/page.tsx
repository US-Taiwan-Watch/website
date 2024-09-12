import { useTranslation } from "@/common/lib/i18n/serverHooks";
import { Language } from "@/common/lib/i18n/types";
import Link from "next/link";

interface SamplePageParams {
  lang: Language;
}

export default async function SamplePage({
  params: { lang },
}: {
  params: SamplePageParams;
}) {
  const { t } = await useTranslation(lang);

  return (
    <>
      <h1>Hi from sample page!</h1>
      <Link href={`/${lang}`}>back</Link>

      {/** 測試 server render */}
      <p>Sample: {t("sample")}</p>
    </>
  );
}
