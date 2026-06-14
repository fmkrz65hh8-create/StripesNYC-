import Link from "next/link";

export default function DashboardPage() {
  return (
    <main>
      <section>
        <h1>Official Dashboard</h1>
        <p>
          Welcome to your STRIPESNYC official dashboard. This is where officials
          will view assignments, availability, crew updates, and training tools.
        </p>
      </section>

      <section>
        <h2>Today&apos;s Crew Tools</h2>
        <ul>
          <li>
            <Link href="/availability">Update availability status</Link>
          </li>
          <li>
            <Link href="/crewsync">Open CrewSync Live™ messages</Link>
          </li>
          <li>
            <Link href="/profile">Manage official profile</Link>
          </li>
          <li>
            <Link href="/training">Review training reminders</Link>
          </li>
        </ul>
      </section>

      <section>
        <Link href="/">Back to Home</Link>
      </section>
    </main>
  );
}