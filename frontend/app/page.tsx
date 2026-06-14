import Link from "next/link";
import ApiStatus from "../lib/components/ApiStatus";
export default function HomePage() {
  return (
    <main>
      <section>
        <h1>STRIPESNYC</h1>
        <p>
          CrewSync Live™ for football officials, assignors, and game-day crews.
        </p>

        <div>
          <Link href="/dashboard">
            <button>Official Login</button>
          </Link>

          <Link href="/assignor">
            <button>Assignor Dashboard</button>
          </Link>
        </div>
      </section>

      <section>
        <h2>MVP Features</h2>
        <ul>
          <li>
            <Link href="/dashboard">View official dashboard</Link>
          </li>
          <li>
            <Link href="/availability">Submit crew availability</Link>
          </li>
          <li>
            <Link href="/profile">Manage official profiles</Link>
          </li>
          <li>
            <Link href="/crewsync">Coordinate through CrewSync Live™</Link>
          </li>
          <li>
            <Link href="/training">Access training resources</Link>
          </li>
        </ul>
      </section>

      <section>
        <ApiStatus />