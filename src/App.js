import './App.css';
import Header  from './components/Header';
import Footer from './components/Footer';

function App() {
  const lastName = 'Alabab';
  const firstName = 'Jhay';
  const middleName = 'Lamarca';

  const arr = [1, 2, 3, 4, 5]

  return (
    <>
      <Header />
      <main>
        <h1>Hello { lastName }, { firstName } { middleName } { arr }!</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
