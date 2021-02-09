import React, { useState } from "react";
import Header from "../../components/Header"
import Image from "../../components/Image"

const IndexPage = () => {
    return (
        <div>
            <Header>Espen Boman Fosseide</Header>
            <Image src={require("../../images/espen.jpg").default}></Image>
        </div>
    );
};

export default IndexPage;
