import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Buy from "./components/Buy/Buy";
import CartPhone from "./components/CartPhone/CartPhone";
import Contact from "./components/Contact/Contact";
import ContactInputs from "./components/ContactInput/ContactInput";
import Content from "./components/Content/Content";
import Details from "./components/Details/Details";
import EditPhone from "./components/EditPhone/EditPhone";
import FollowCart from "./components/FollowCart/FollowCart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ADMIN_EMAIL } from "./components/helpers/consts";
import InHome from "./components/InHome/InHome";
import Error404 from "./components/Pages/Error404";
import Success from "./components/Pages/Success";
import Phone from "./components/Phone/Phone";
import PhoneList from "./components/PhoneList/PhoneList";
import { authContext } from "./context/authContext";
import Tv from ".././src/components/PhoneList/Tv/Tv";
import Form from "./components/Form/Forms";
import Commit from "./components/Commit/Commit";

const Routing = () => {
  let ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <Admin />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditPhone />,
      id: 2,
    },
  ];
  const { currentUser } = useContext(authContext);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/like" element={<FollowCart />} />
        <Route path="/" element={<Content />} />
        <Route path="/add" element={<ContactInputs />} />
        <Route path="/list" element={<PhoneList />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/for" element={<InHome />} />
        <Route path="/auth" element={<Auth />} />
        {ADMIN_ROUTES.map((item) => (
          <Route
            key={item.id}
            path={item.link}
            element={
              currentUser === ADMIN_EMAIL ? (
                item.element
              ) : (
                <Navigate replace to="*" />
              )
            }
          />
        ))}
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPhone />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/success" element={<Success />} />
        <Route path="/form" element={<Form />} />
        <Route path="/commit" element={<Commit />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
