import Script from 'next/script'

/**
 * 預設 GA 同意聲明腳本
 * 設定預設同意聲明為拒絕，
 * 實際值需根據 ConsentBanner 使用者的選擇來更新
 */
export default function GoogleAnalyticsConsentScript() {
  return (
    <Script id="consent-default" strategy="afterInteractive">
      {`
        // Define dataLayer and the gtag function.
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        // Set default consent to 'denied' as a placeholder
        // Determine actual values based on your own requirements
        gtag("consent", "default", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
          functionality_storage: "denied",
          personalization_storage: "denied",
          security_storage: "denied",
        });
      `}
    </Script>
  )
}
