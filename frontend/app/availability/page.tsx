import Link from "next/link";

export default function AvailabilityPage() {
  return (
    <main>
      <section>
        <h1>Availability</h1>
        <p>
          Officials can submit availability, update conflicts, and help
          assignors build reliable crews.
        </p>
      </section>

      <section>
        <h2>Availability Tools</h2>
        <ul>
          <li>Submit available dates</li>
          <li>Mark unavailable dates</li>
          <li>Update travel limits</li>
          <li>Confirm assignment readiness</li>
          <li>Notify assignors of schedule changes</li>
        </ul>
      </section>

      <section>
        <Link href="/">Back to Home</Link>
      </section>
    </main>
  );
}