import Footer from '../footer/Footer';
import Header from '../header/Header';

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <Header />
      <main className='container justify-self-center mt-4 px-4'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
