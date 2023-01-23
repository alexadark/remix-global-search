import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
