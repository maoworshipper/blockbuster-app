import { Container } from "../../components/Container";
import { Cart } from "../../components/Cart";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const storageName = "cart";

const CartPage = () => {
  const [cart] = useLocalStorage(storageName, []);

  return (
    <Container>
      <Cart {...cart} />
    </Container>
  );
};

export default CartPage;
