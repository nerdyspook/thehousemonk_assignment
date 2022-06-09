import "./App.css";
import SearchBar from "./components/SearchBar";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="w-full max-w-[1024px] mx-auto">
      <header className="App-header">
        <h1 className="text-3xl text-rose-700 font-bold underline m-4">
          Recipe Finder
        </h1>
      </header>
      <SearchBar />

      <Pages />
    </div>
  );
}

export default App;
