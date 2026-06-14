import Link from "next/link";

export default function CrewSyncPage() {
  return (
    <main>
      <section>
        <h1>CrewSync Live™</h1>
        <p>
          Real-time crew communication for officials, assignors, and game-day
          operations.
        </p>
      </section>

      <section>
        <h2>Live Crew Updates</h2>
        <ul>
          <li>Game-day arrival confirmations</li>
          <li>Position updates</li>
          <li>Weather or field changes</li>
          <li>Emergency crew alerts</li>
          <li>Assignment change notifications</li>
        </ul>
      </section>

      <section>
        <Link href="/">Back to Home</Link>
      </section>
    </main>
  );
}