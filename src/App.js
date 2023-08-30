import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SubHeader from "./SubHeader";
import Orders from "./Orders";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51MyYnWSFcPAnkSKrIXTX276KkBNkDBrdop4d1lO1ZqgO5ZKs0MOTvq40mnPwuHlqLzoNb6gnOxL41awUohCRj36c00sE8cLyWg"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once when  the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    -<div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SubHeader />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
