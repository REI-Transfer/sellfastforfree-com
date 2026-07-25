/**
 * lib/config.ts — Single server-side env var read point.
 * Import this ONLY in server components (layout.tsx, page.tsx, API routes).
 * Never import in "use client" components — pass values as props instead.
 */
const config = {
  // Brand
  companyName:     process.env.COMPANY_NAME     ?? "Your Home Buyers",
  phoneDisplay:    process.env.PHONE_DISPLAY     ?? "(800) 000-0000",
  phoneHref:       process.env.PHONE_HREF        ?? "8000000000",
  accentColor:     process.env.ACCENT_COLOR      ?? "#2563eb",
  headerBgColor:   process.env.HEADER_BG_COLOR   ?? "#ffffff",
  logoUrl:         process.env.LOGO_URL          ?? "",

  // Owner / personalization
  ownerName:       process.env.OWNER_NAME        ?? "",
  headshotUrl:     process.env.HEADSHOT_URL      ?? "",

  // Hero
  headline:        process.env.HEADLINE          ?? "Sell Your House Fast For Cash",
  headlineAccent:  process.env.HEADLINE_ACCENT   ?? "",
  subheadline:     process.env.SUBHEADLINE       ?? "No fees. No repairs. Cash offer in 24 hours.",

  // Service areas — JSON array of {id, centerLat, centerLng, radiusMiles}. Must be
  // valid circle objects or "[]". NEVER a state-name array like ["Wisconsin"].
  // Hardcoded to cover CT + RI + MA (2026-07-25) so all three states pass the geo
  // gate regardless of the stale SERVICE_AREAS env value. Update this array to change
  // coverage; the SERVICE_AREAS env var is intentionally no longer read here.
  serviceAreas:    '[{"id":"hartford-ct","centerLat":41.7658,"centerLng":-72.6734,"radiusMiles":35},{"id":"newhaven-ct","centerLat":41.3083,"centerLng":-72.9279,"radiusMiles":30},{"id":"stamford-ct","centerLat":41.0534,"centerLng":-73.5387,"radiusMiles":22},{"id":"providence-ri","centerLat":41.8240,"centerLng":-71.4128,"radiusMiles":30},{"id":"boston-ma","centerLat":42.3601,"centerLng":-71.0589,"radiusMiles":35},{"id":"worcester-ma","centerLat":42.2626,"centerLng":-71.8023,"radiusMiles":30},{"id":"springfield-ma","centerLat":42.1015,"centerLng":-72.5898,"radiusMiles":35},{"id":"pittsfield-ma","centerLat":42.4501,"centerLng":-73.2454,"radiusMiles":30},{"id":"capecod-ma","centerLat":41.7003,"centerLng":-70.3002,"radiusMiles":40}]',
  // Market name for advertorial copy ("Wisconsin"); empty renders "the areas we serve".
  marketName:      process.env.MARKET_NAME       ?? "",
  smsKeyword:      process.env.SMS_KEYWORD       ?? "OFFER",

  // Trust indicators
  stat1Value:      process.env.STAT_1_VALUE      ?? "1,000+",
  stat1Label:      process.env.STAT_1_LABEL      ?? "Homes Purchased",
  stat2Value:      process.env.STAT_2_VALUE      ?? "10+",
  stat2Label:      process.env.STAT_2_LABEL      ?? "Years in Business",
  stat3Value:      process.env.STAT_3_VALUE      ?? "24 Hrs",
  stat3Label:      process.env.STAT_3_LABEL      ?? "Cash Offer",

  // SEO
  metaTitle:       process.env.META_TITLE        ?? "Sell Your House Fast For Cash",
  metaDescription: process.env.META_DESCRIPTION  ?? "Get a fair cash offer for your home in 24 hours. No fees, no repairs, no hassle.",

  // Footer
  privacyPolicyUrl: process.env.PRIVACY_POLICY_URL ?? "/privacy",
  termsUrl:         process.env.TERMS_URL           ?? "/terms",

  // Survey disqualification — comma-separated property type IDs to hard-disqualify
  disqualifiedPropertyTypes: process.env.DISQUALIFIED_PROPERTY_TYPES ?? "mobile-home,land,other",

  // Webhook (server-side only — never exposed to browser)
  webhookUrl:      process.env.WEBHOOK_URL ?? "",

  // Style flag — when IBUYKC_STYLE === "true" (default for new clients via the
  // env-schema default), render the iBuyKC style: white page, accent only on
  // buttons, dark text, enlarged logo, flexible owner/team photo. The ~17
  // projects deploying rei-survey-template@main have no IBUYKC_STYLE env → falsy
  // → byte-identical legacy style.
  useIbuykcStyle:  process.env.IBUYKC_STYLE === "true",
} as const

export default config
export type Config = typeof config
