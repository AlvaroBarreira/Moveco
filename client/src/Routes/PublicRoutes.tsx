import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { NotFound, Layout, Home, Contact, AboutUs } from "./index";

export const PublicRoutes = () => {

    return (
        <Router>
             <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Layout>
          {/*  <Routes>
                <Route
                    path="/backoffice/*"
                    element={rol === 1 ? <PrivateRoutes /> : <Navigate to="/" />}
                />
            </Routes> */}
        </Router>
    );
};

 