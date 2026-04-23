import './App.css';

function App() {
  return (
    <main className="p-token-8">
      <div className="rounded-lg border border-border bg-background p-token-6 text-foreground">
        <p className="text-sm text-muted-foreground">Semantic token test</p>
        <h1 className="mt-token-2 text-2xl font-semibold">Tailwind token mapping</h1>
        <button className="mt-token-4 rounded-md bg-primary px-token-4 py-token-2 text-primary-foreground">
          Primary action
        </button>
      </div>
    </main>
  );
}

export default App;
