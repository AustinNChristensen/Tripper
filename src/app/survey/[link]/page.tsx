export default function SurveyPage() {
  return (
    <form className="p-8 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Trip Survey</h1>
      <p className="text-sm text-gray-500">Magic link survey placeholder.</p>
      <input name="q1" placeholder="Personality question" className="border p-2 w-full" />
      <input name="budget" placeholder="Budget" className="border p-2 w-full" />
      <input name="activities" placeholder="Activities" className="border p-2 w-full" />
      <textarea name="notes" placeholder="Optional notes" className="border p-2 w-full" rows={3} />
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Submit</button>
    </form>
  );
}
