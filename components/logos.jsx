import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";
import logo from "../public/images/react-logo.png";
import nextjs from "../public/images/nextjs.png";
import aws from "../public/images/aws.png";
import gCloud from "../public/images/Gcloud.png";
import flutter from "../public/images/flutter.png";
import node from "../public/images/node.png";
import android from "../public/images/android.png";
import ios from "../public/images/ios.png";
import vercel from "../public/images/vercel.png";
import analitycs from "../public/images/analytics.png";

const Logos = () => (
  <>
    <SliderContainer className="" contentWidth={1920} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src={logo}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={nextjs}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={aws}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={gCloud}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={flutter}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={node}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={android}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={ios}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={vercel}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src={analitycs}
          width={150}
          height={50}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default Logos;
