const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

/**
 * Carries UTM params from the incoming URL onto an internal link's href,
 * so a campaign touch (LinkedIn message, US cold email) stays attributable
 * all the way through to the booking form on /contact.
 */
export function withUtm(href: string, searchParams: URLSearchParams): string {
  const incoming = new URLSearchParams();
  for (const key of UTM_KEYS) {
    const value = searchParams.get(key);
    if (value) incoming.set(key, value);
  }
  if ([...incoming.keys()].length === 0) return href;

  const [path, existingQuery] = href.split("?");
  const merged = new URLSearchParams(existingQuery);
  incoming.forEach((value, key) => merged.set(key, value));
  return `${path}?${merged.toString()}`;
}
