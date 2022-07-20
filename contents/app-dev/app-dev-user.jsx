/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserByEmail, signOut } from "@redux/actions/appUser";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
// import styles from "./app-dev-style";

const AppDevUser = () => {
  // console.log("[in AppDevUser]");
  const appUser = useSelector(state => state.appUser);
  const dispatch = useDispatch();

  const fetchUserHandler = async id => {
    if (id) {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ id }),
        headers: { "content-type": "application/json" },
      });
      const data = await res.json();
      console.log(id, " : ", data);
    } else {
      const res = await fetch("/api/user");
      const data = await res.json();
      console.log(id, " : ", data);
    }
  };

  const getUserHandler = email => {
    console.log(email);
    email ? dispatch(getUserByEmail(email)) : dispatch(signOut());
  };

  return (
    <div className={"_grid-row"}>
      {/* ===== App Status ========== */}
      <div className="_sub-section _grid-2row-fix-top">
        <Title bold>App User</Title>
        <div className="_body _grid-2row-fix-bottom">
          {appUser.email ? (
            <Title icon={appUser.type} bold>
              {appUser.name}
              <div className="top-content">{appUser.type}</div>
              <div className="sub-content">{appUser.email}</div>
            </Title>
          ) : (
            <Title bold>Guest User</Title>
          )}
          <div className="_actions _buttons-row">
            <Button xs clickFn={() => fetchUserHandler("1")} disabled={!appUser.email}>
              {"User 1 | Guest"}
            </Button>
            <Button
              xs
              clickFn={() => getUserHandler("v.ghodsii@gmail.com")}
              disabled={appUser.email === "v.ghodsii@gmail.com"}
            >
              User 2 | Architect
            </Button>
            <Button
              xs
              clickFn={() => getUserHandler("client@gmail.com")}
              disabled={appUser.email === "client@gmail.com"}
            >
              User 3 | Client
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevUser;
