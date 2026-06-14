import Link from "next/link";

export default function TrainingPage() {
  return (
    <main>
      <section>
        <h1>Training Library</h1>
        <p>
          Access football officiating mechanics, rules resources, signals,
          crew responsibilities, and game-preparation materials.
        </p>
      </section>

      <section>
        <h2>Training Resources</h2>
        <ul>
          <li>NFHS rules reminders</li>
          <li>Official signals</li>
          <li>7-official and 8-official mechanics</li>
          <li>Pre-game checklist</li>
          <li>Penalty enforcement review</li>
        </ul>
      </section>

      <section>
        <Link href="/">Back to Home</Link>
      </section>
    </main>
  );
}
}