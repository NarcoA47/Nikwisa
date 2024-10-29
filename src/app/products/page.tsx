// import NavigationBar from '../components/dashboard/navigation';
import ProductsPage from '../components/products/products';
import BottmNavigation from '../components/BottomNav';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <ProductsPage/>
      <BottmNavigation/>
    </div>
  );
}
