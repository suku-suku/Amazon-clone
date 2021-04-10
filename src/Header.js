import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/jpeg;base64,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zX0SFhmiugCnpPRsdVHZ246rxja/xHguYaa0LNSPs9p1Ce5IAS13PYfBdQaXRnDEbR/zJZzNE8arrWObXAWPngVCubGFb7uEufv6ZlhZaRqWrwSxjy9vjOLXX09DaDnqnWY0hl+9IQWtb/8AR8AumDQlEDrej09879mz4ZKy6ojaLNANsAG4AfJRKeit/wB8t349yxradxjhShg+by6FbROjIaOLUZxe821pHbz9F7F3u1jyG4JZzzd3IbArkUdlbRiorBcCglJzk5SeLZ6jZZZERejyEREAYpWXVIOMbr7DmPmvokLDNFdAHzdO6GhrYtV2BGMcgtdjrfDeFyrTOgqikdqyMJbezZBrOa/g7YfA4rrY1ozhiDm3es/bRPGq62OBa4Cx88CpFG4lT3ZFnYaUq2n2r7o8vVPL87sPwcKsdx8l9/or0ckq5Guc1zadrtZ77WuBbutO1x9y6Z/YVDfX9Gp7537JlvLJWu3jYLNsbYBrch8gu9S9xWEVgyyuP5BrQcaMGm82+HZh4PrgepSGMsMMNVo3D+SU7LBYWhzzrO5DcFcY1V5mz2ihEAQiBSkM8Pjuqz6YFXFNkxHzhRjcs0dOArdkTEeGMssigKUAEREAEREAFBClEAYnx3VeSmBV1QQgD54pAssdMArdksgDwyOyyIiACIiACIiACghSiAMT47qvJTAq6osgD53og3LMymAVuyWSGY2MsvaIUAEUIkBClEQMkKURMRIREQBClETEEREAEREAEREAEREAEREAEREAEREAEREAEREAQpREhhQiIAhFCIGEREgP/9k="
        />
      </Link>

      
      <div className="header__option">
          <span className="header__optionLineTwo">MEN</span>
         
        </div>

        <div className="header__option">
          <span className="header__optionLineTwo">WOMEN</span>
         
        </div>

        <div className="header__option">
          <span className="header__optionLineTwo">KIDS</span>
         
        </div>

        <div className="header__option">
          <span className="header__optionLineTwo">HOME & LIVING</span>
         
        </div>

        <div className="header__option">
          <span className="header__optionLineTwo">OFFERS</span>
         
        </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne"></span>
            <span className="header__optionLineTwo">WishList</span>
          </div>
        </Link>
        

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;