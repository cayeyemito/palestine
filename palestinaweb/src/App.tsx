import { ThemeProvider } from "./components/ui/theme-provider";

export function CardDemo() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <h1>Hola</h1>
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return <CardDemo />;
}
