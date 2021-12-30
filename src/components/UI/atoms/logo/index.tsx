import React from "react";
import LogoComponent from "./logo_component";

const Logo: React.FC<any> = React.forwardRef(({...props}) => {
  return <LogoComponent {...props} />;
});

export { 
  LogoComponent,
};

export default Logo;
