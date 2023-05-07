import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pacarSaya, setPacarSaya] = useState(0);
  const [statusSaya, setStatusSaya] = useState();
  const nama = "Hari";
  const footer = () => {
    return (
      <div>
        <h3> ini Footer</h3>
        <p>footer diambil dari props</p>
        <p>ini yang buat: {nama}</p>
      </div>
    );
  };

  const tambah = () => {
    setPacarSaya((prev) => {
      return prev + 1;
    });
  };
  const kurang = () => {
    setPacarSaya((prev) => {
      if (prev <= 0) {
        return (prev = 0);
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    if (pacarSaya === 0) {
      setStatusSaya("Jomblo");
    } else if (pacarSaya === 1) {
      setStatusSaya("Pacaran");
    } else {
      setStatusSaya("PlayBoy");
    }
    console.log("test");
  }, [pacarSaya]);

  const navigate = useNavigate();
  return (
    <div style={{margin: 40}}>
      <h1>Status saya : {statusSaya}</h1>
      <h5>Pacar saya berjumlah: {pacarSaya}</h5>
      <button onClick={() => tambah()}>tambah!</button>
      <button style={{marginLeft: 20}} onClick={() => kurang()}>kurang!</button>
      <br />
      <button style={{marginTop: 10}} onClick={() => navigate("/about")}>About</button>
      <Footer footer={footer()} />
    </div>
  );
};

export default Home;
