import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";
import logo from "../public/images/react-logo.png";
import nextjs from "../public/images/nextjs.png";
import aws from "../public/images/aws.png";
import gCloud from "../public/images/gCloud.png";
import flutter from "../public/images/flutter.png";
import node from "../public/images/node.png";
import android from "../public/images/android.png";
import ios from "../public/images/ios.png";
import vercel from "../public/images/vercel.png";
import analitycs from "../public/images/analytics.png";

const Logos = () => (
  <>
    <SliderContainer className="" contentWidth={1920} initialOffsetX={0}>
      <SliderItem width={225}>
        <Image
          src={logo}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={nextjs}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={aws}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={gCloud}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={flutter}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={node}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={android}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={ios}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={vercel}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={225}>
        <Image
          src={analitycs}
          width={225}
          height={80}
          alt="tech logo"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default Logos;
