"use client";

import { useTranslation } from "react-i18next";
import "@/app/locales/index";

export default function Home() {
  const { t } = useTranslation();
  return <h1 className="text-3xl font-bold underline">{t("Hello")}</h1>;
}
