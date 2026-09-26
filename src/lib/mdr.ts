// Shared UPI MDR rules and helpers (used by pages and the calculator)
export const SITE = "https://upimdrcalculator.com";
export const LAST_UPDATED_ISO = "2026-09-26";
export const LAST_UPDATED = "26 September 2026";

export const MDR_RATE = 0.004; // 0.4%
export const MDR_CAP = 300; // ₹300 max per payment
export const THRESHOLD = 2000; // payments above ₹2,000
export const GST_RATE = 0.18; // 18% GST on MDR
export const ESSENTIAL_FLAT = 5; // flat ₹5 for essential sectors

export function calc(amount: number) {
  const mdr = amount > THRESHOLD ? Math.min(amount * MDR_RATE, MDR_CAP) : 0;
  const gst = mdr * GST_RATE;
  return { amount, mdr, gst, total: mdr + gst, net: amount - mdr - gst };
}

export const inr = (v: number) =>
  "₹" + v.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const inr0 = (v: number) => "₹" + v.toLocaleString("en-IN");

export type Faq = { q: string; a: string };

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});
