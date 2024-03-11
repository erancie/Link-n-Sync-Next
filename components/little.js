import React from 'react'

import PropTypes from 'prop-types'

const Little = (props) => {
  return (
    <>
      <div className={`little-container ${props.rootClassName} `}>
        <div className="little-group3">
          <span className="little-text">HEYO OVERWRITE</span>
          <img
            alt="Rectangle133"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db5fff75-4872-4c21-8f90-62f5231efef1/268c3f99-11df-45ed-a9a1-d49a203627e0?org_if_sml=19920&amp;force_format=original"
            className="little-rectangle1"
          />
          <img
            alt="Vector547"
            src="/external/vector547-9we.svg"
            className="little-vector"
          />
          <img
            alt="Rectangle235"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db5fff75-4872-4c21-8f90-62f5231efef1/a216c2c9-965a-4443-9beb-3e9308cd69ed?org_if_sml=13886&amp;force_format=original"
            className="little-rectangle2"
          />
          <img
            alt="Rectangle337"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db5fff75-4872-4c21-8f90-62f5231efef1/bd8caf99-d81f-463b-aa00-b004823df322?org_if_sml=13886&amp;force_format=original"
            className="little-rectangle3"
          />
          <span className="little-text1">
            <span>Web Server</span>
          </span>
          <span className="little-text3">
            <span>Frontend</span>
          </span>
          <span className="little-text5">
            <span>CMS Backend</span>
          </span>
          <img
            alt="Line1316"
            src="/external/line1316-1ng.svg"
            className="little-line1"
          />
          <img
            alt="Line7542"
            src="/external/line7542-qgmi.svg"
            className="little-line7"
          />
        </div>
      </div>
      <style jsx>
        {`
          .little-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .little-group3 {
            width: 241px;
            height: 368px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .little-text {
            left: 25px;
            color: rgb(101, 101, 101);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: 'Inter';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .little-rectangle1 {
            top: 53px;
            left: 0px;
            width: 241px;
            height: 315px;
            position: absolute;
            border-color: rgba(160, 160, 160, 1);
            border-style: solid;
            border-width: 0.20000000298023224px;
            border-radius: 7px;
          }
          .little-vector {
            top: 215px;
            left: 108px;
            width: 26px;
            height: 20px;
            position: absolute;
          }
          .little-rectangle2 {
            top: 122px;
            left: 32px;
            width: 177px;
            height: 68px;
            position: absolute;
            border-color: rgba(160, 160, 160, 1);
            border-style: solid;
            border-width: 0.20000000298023224px;
            border-radius: 7px;
          }
          .little-rectangle3 {
            top: 263px;
            left: 32px;
            width: 177px;
            height: 68px;
            position: absolute;
            border-color: rgba(160, 160, 160, 1);
            border-style: solid;
            border-width: 0.20000000298023224px;
            border-radius: 7px;
          }
          .little-text1 {
            top: 83px;
            left: 87px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .little-text3 {
            top: 149px;
            left: 94px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .little-text5 {
            top: 289px;
            left: 87px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .little-line1 {
            top: 190px;
            left: 120px;
            width: 24px;
            height: 1px;
            position: absolute;
          }
          .little-line7 {
            top: 238px;
            left: 120px;
            width: 25px;
            height: 1px;
            position: absolute;
          }

          .little-root-class-name1 {
            left: 10px;
            width: var(--dl-size-size-xxlarge);
            bottom: 0px;
            position: static;
          }
          @media (max-width: 991px) {
            .little-text {
              color: rgb(101, 101, 101);
              font-size: 20px;
              font-family: Inter;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .little-root-class-name1 {
              width: var(--dl-size-size-xxlarge);
            }
          }
          @media (max-width: 767px) {
            .little-group3 {
              align-self: center;
            }
            .little-root-class-name {
              top: 600px;
              flex: 0;
              left: 0px;
              right: 0px;
              width: auto;
              margin: auto;
              position: absolute;
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Little.defaultProps = {
  rootClassName: '',
}

Little.propTypes = {
  rootClassName: PropTypes.string,
}

export default Little
