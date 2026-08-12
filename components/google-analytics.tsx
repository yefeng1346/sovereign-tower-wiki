import Script from "next/script";

// Google Analytics measurement IDs are public and are intentionally kept in the
// rendered page. Keeping this in one component prevents duplicate tags across
// the English and localized root layouts.
const measurementId = "G-6H6GD8KCP6";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
