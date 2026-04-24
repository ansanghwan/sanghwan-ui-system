import './App.css';
import { HelperText, PageTitle } from './components/ui/heading';

function App() {
  return (
    <main className="p-token-8">
      <div className="rounded-lg border border-border bg-background p-token-6 text-foreground">
        <HelperText>Semantic token test</HelperText>
        <PageTitle className="mt-token-2">Tailwind token mapping</PageTitle>
        <button className="mt-token-4 rounded-md bg-primary px-token-4 py-token-2 text-primary-foreground">
          Primary action
        </button>
      </div>
    </main>
  );
}

export default App;
