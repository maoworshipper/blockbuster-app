import { useEffect } from "react";
import { Container } from "../../components/Container";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Box, Notification } from "../../components/UI";

const storageName = "cart";

const CheckoutPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cart, setCart] = useLocalStorage(storageName, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setCart([]), []);

  return (
    <Container>
      <h1>Checkout</h1>
      <Box>
        <Notification>La compra fue exitosa.<br />Gracias por su compra.</Notification>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
