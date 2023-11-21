import 'reflect-metadata'
import ReactDOM from 'react-dom/client';
import App from './App';

function Demo({ count }: {
  count: number;
}) {
  return (
    <p>DEMO {count}</p>
  );
}

function main() {
  const element = document.getElementById('app');
  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);
  console.log(root)
  root.render(<App />)
}

main();
