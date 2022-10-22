import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return ( <div>
   
    <MDBFooter  id="fotera" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} 
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;