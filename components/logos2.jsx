import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";
import graphql from "../public/images/graphql.png";
import wordpress from "../public/images/wordpress.png";
import firebase from "../public/images/firebase.png";
import postgre from "../public/images/postgresql.png";
import mongo from "../public/images/mongodb.png";
import docker from "../public/images/docker.webp";
import express from "../public/images/express.png";
import mysql from "../public/images/mysql.png";
import vercel from "../public/images/vercel.png";
import analitycs from "../public/images/analytics.png";

const Logos2 = () => (
  <>
    <SliderContainer className="" contentWidth={1920} initialOffsetX={0}>
      <SliderItem width={225}>
        <Image
          src={graphql}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={postgre}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={firebase}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={mongo}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={wordpress}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={docker}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={express}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={mysql}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default Logos2;
