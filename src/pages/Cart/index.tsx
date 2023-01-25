import { Container } from "../../components/Container";
import { Cart } from "../../components/Cart";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Movie } from "../../types/movies";
import { Box } from "../../components/UI";

const storageName = "cart";

const CartPage = () => {
  const [cart, setCart] = useLocalStorage(storageName, []);

  const eliminateItem = (id: string) => {
    const newCart = cart.filter((item: Movie) => item.imdbID !== id);
    setCart(newCart);
  };

  return (
    <Container>
      {cart.length > 0 ? (
        <Cart cartItems={cart} onEliminateItem={eliminateItem} />
      ) : (
        <Box>
          <h2>El carrito está vacío</h2>
        </Box>
      )}
    </Container>
  );
};

export default CartPage;
