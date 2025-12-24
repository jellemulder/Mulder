type Visit = {
  id: string;
  ts: string;
  path: string | null;
  ua: string | null;
};

async function getVisits(): Promise<Visit[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/visit`, {
    // For server components, avoid caching so you see new visits
    cache: "no-store",
  });

  const data = await res.json();
  if (!data?.ok) return [];
  return data.visits;
}

export default async function VisitsPage() {
  const visits = await getVisits();

  return (
    <div style={{ padding: 24 }}>
      <h1>Last 10 visits</h1>

      {visits.length === 0 ? (
        <p>No visits found.</p>
      ) : (
        <table cellPadding={8}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Path</th>
              <th>User agent</th>
            </tr>
          </thead>
          <tbody>
            {visits.map(v => (
              <tr key={v.id}>
                <td>{new Date(v.ts).toLocaleString()}</td>
                <td>{v.path ?? "-"}</td>
                <td>{v.ua ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
