import { createContext } from "react";

const loggedInUserContext = createContext({
    userInfo: null,
    setUserInfo: () => undefined
});

export default loggedInUserContext;
