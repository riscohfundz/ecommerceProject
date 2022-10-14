import { getUserInfo } from "../localStorage";

const Header = {
    render: () => {
        const {name} = getUserInfo();
      return `
    <div>
      <a href="/#/">Jsamazona</a>
    </div>
    <div>
    ${
     name
       ? `<a href="/#/profile">${name}</a>`
        : `<a href="/#/signin">Sign-In</a>`
    }
      <a href="/#/cart">Cart</a>
    </div>
    `;
    },
    after_render: () => {}, 
};
export default Header;