/**
 * Zoho Calendar's built-in event request form ("Request an Event"),
 * embedded — lets a visitor submit a real scheduling request that syncs
 * to the Zoho Calendar, no separate Zoho Bookings product needed.
 * Fixed 432x350 by Zoho; wrapped in a responsive, scrollable container
 * since the iframe itself can't be restyled (cross-origin content).
 */
export function ZohoBooking() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gold/20 bg-navy-raised p-4">
      <iframe
        src="https://calendar.zoho.eu/eventreqForm/zz080112305bb232ad20a1178f0d32b6ee7452281214dc32d30c692cf6cb3e38acf9d51213168805123b0db6eb0a94c83aff3d0af2?theme=0&l=en&tz=Europe%2FBerlin"
        title="Book a call with Beyondelta"
        frameBorder="0"
        scrolling="no"
        marginWidth={0}
        marginHeight={0}
        height={350}
        width={432}
        className="mx-auto max-w-full"
      />
    </div>
  );
}
