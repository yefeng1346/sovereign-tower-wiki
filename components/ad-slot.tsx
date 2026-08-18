import Script from "next/script";

const adScriptId = "ec90b4a9b07bc944e1e5ea1e5da73254";
const adScriptSrc = "https://staffresumed.com/ec90b4a9b07bc944e1e5ea1e5da73254/invoke.js";

export function AdSlot() {
  return (
    <section className="ad-slot section-border" aria-label="Advertisement">
      <div className="container">
        <span className="ad-slot-label">Advertisement</span>
        <div id={`container-${adScriptId}`} />
      </div>
      <Script id={`ad-script-${adScriptId}`} src={adScriptSrc} strategy="afterInteractive" async data-cfasync="false" />
    </section>
  );
}
