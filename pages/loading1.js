import React from 'react'
import Head from 'next/head'

const Loading1 = (props) => {
  return (
    <>
      <div className="loading1-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="loading1-loading">
          <div className="loading1-asset11">
            <img
              alt="Rectangle8I520"
              src="/external/rectangle8i520-lt8-200h.png"
              className="loading1-rectangle8"
            />
            <img
              alt="Line1I520"
              src="/external/line1i520-tsnf.svg"
              className="loading1-line1"
            />
            <img
              alt="Line2I520"
              src="/external/line2i520-04k9.svg"
              className="loading1-line2"
            />
            <img
              alt="Rectangle13I520"
              src="/external/rectangle13i520-ekat-200h.png"
              className="loading1-rectangle13"
            />
            <span className="loading1-text">
              <span>LOGO</span>
            </span>
          </div>
          <span className="loading1-text2">
            <span>Link ‘n’ Sync</span>
          </span>
          <span className="loading1-text4">
            <span>Real-Time Broadcasting</span>
          </span>
          <span className="loading1-text6">
            <span>Loading..</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .loading1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .loading1-loading {
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
          .loading1-asset11 {
            gap: 10px;
            width: 100px;
            height: 100px;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .loading1-rectangle8 {
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
          .loading1-line1 {
            top: 99px;
            left: 1px;
            width: 139px;
            height: 1px;
            position: absolute;
          }
          .loading1-line2 {
            top: 1px;
            left: 1px;
            width: 139px;
            height: 1px;
            position: absolute;
          }
          .loading1-rectangle13 {
            top: 36px;
            left: 31px;
            width: 39px;
            height: 27px;
            position: absolute;
            border-radius: 2px;
          }
          .loading1-text {
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
          .loading1-text2 {
            top: 261px;
            left: 468px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            z-index: 1;
            position: absolute;
            font-size: 96px;
            font-style: SemiBold;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .loading1-text4 {
            top: 327px;
            left: 428px;
            color: rgba(78, 84, 92, 1);
            height: auto;
            z-index: 2;
            position: absolute;
            font-size: 48px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .loading1-text6 {
            top: 498px;
            left: 641px;
            color: rgba(78, 84, 92, 1);
            height: auto;
            z-index: 3;
            position: absolute;
            font-size: 36px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Loading1
