import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Title from "./Title";
import TopMenu from "./TopMenu";
import UploadForm from "./UploadForm";

const MainPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <TopMenu />
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default MainPage;
