import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from '../../redux/user/actions';

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogInLogOutClick = () => {
    if (currentUser) {
      dispatch(logoutUser());
    } else {
      dispatch(loginUser({ name: 'Vinicius', age: 23 }));
    }
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleLogInLogOutClick}>{ currentUser ? 'Sair' : 'Login' }</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
