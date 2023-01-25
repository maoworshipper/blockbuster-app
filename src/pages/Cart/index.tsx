import { Container } from "../../components/Container";
import { Cart } from "../../components/Cart";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Movie } from "../../types/movies";

const storageName = "cart";

const CartPage = () => {
  const [cart, setCart] = useLocalStorage(storageName, []);

  const eliminateItem = (id: string) => {
    const newCart = cart.filter((item: Movie) => item.imdbID !== id);
    setCart(newCart);
  };

  return (
    <Container>
      <Cart
        cartItems={cart}
        onEliminateItem={eliminateItem}
      />
    </Container>
  );
};

export default CartPage;
