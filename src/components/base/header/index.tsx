import React from "react";
import HeaderComponent from "./header_component";

const Header: React.FC<any> = ({...props}) => {
    return(
        <HeaderComponent {...props} />
    )
};

export default Header;
