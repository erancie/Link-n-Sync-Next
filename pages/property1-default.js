import React from 'react'
import Head from 'next/head'

import Little from '../components/little'

const Property1Default = (props) => {
  return (
    <>
      <div className="property1-default-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="property1-default-property1-default">
          <div className="property1-default-asset11">
            <img
              alt="Rectangle85131"
              src="/external/rectangle85131-t9ah-200h.png"
              className="property1-default-rectangle8"
            />
            <img
              alt="Line15132"
              src="/external/line15132-biin.svg"
              className="property1-default-line1"
            />
            <img
              alt="Line25133"
              src="/external/line25133-jcqu.svg"
              className="property1-default-line2"
            />
            <img
              alt="Rectangle135134"
              src="/external/rectangle135134-5a2w-200h.png"
              className="property1-default-rectangle13"
            />
            <span className="property1-default-text">
              <span>LOGO</span>
            </span>
          </div>
          <span className="property1-default-text2">
            <span>Link ‘n’ Sync</span>
          </span>
          <span className="property1-default-text4">
            <span>Real-Time Broadcasting</span>
          </span>
          <span className="property1-default-text6">
            <span>Loading..</span>
          </span>
          <Little rootClassName="little-root-class-name"></Little>
        </div>
      </div>
      <style jsx>
        {`
          .property1-default-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .property1-default-property1-default {
            gap: 10px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 10px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .property1-default-asset11 {
            gap: 10px;
            width: 100px;
            height: 100px;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .property1-default-rectangle8 {
            top: 0px;
            left: 0px;
            width: 100px;
            height: 100px;
            position: absolute;
            border-color: rgba(198, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 2px;
          }
          .property1-default-line1 {
            top: 99px;
            left: 1px;
            width: 139px;
            height: 1px;
            position: absolute;
          }
          .property1-default-line2 {
            top: 1px;
            left: 1px;
            width: 139px;
            height: 1px;
            position: absolute;
          }
          .property1-default-rectangle13 {
            top: 36px;
            left: 31px;
            width: 39px;
            height: 27px;
            position: absolute;
            border-radius: 2px;
          }
          .property1-default-text {
            top: 37px;
            left: 18px;
            color: rgba(141, 151, 151, 1);
            width: 65px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Light;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .property1-default-text2 {
            top: 211px;
            left: 95px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            z-index: 1;
            position: absolute;
            font-size: 48px;
            font-style: SemiBold;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .property1-default-text4 {
            top: 277px;
            left: 94px;
            color: rgba(78, 84, 92, 1);
            height: auto;
            z-index: 2;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .property1-default-text6 {
            top: 498px;
            left: 196px;
            color: rgba(78, 84, 92, 1);
            height: auto;
            z-index: 3;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .property1-default-container {
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .property1-default-property1-default {
              height: 991px;
              position: relative;
            }
            .property1-default-text2 {
              left: 0px;
              right: 0px;
              margin: auto;
              text-align: center;
            }
            .property1-default-text4 {
              left: 0px;
              right: 0px;
              margin: auto;
              text-align: center;
            }
            .property1-default-text6 {
              left: 0px;
              right: 0px;
              margin: auto;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Property1Default
