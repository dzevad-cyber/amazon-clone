interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <header className='bg-slate-300'>header</header>
      <main className='bg-slate-500'>{children}</main>
      <footer className='bg-slate-100'>footer</footer>
    </div>
  );
};

export default RootLayout;
