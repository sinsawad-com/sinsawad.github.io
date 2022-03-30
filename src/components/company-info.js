import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import LineQR from "./line-qr";

const CompanyInfo = () => {
  const sinsawadData = useStaticQuery(graphql`
    query {
      sinsawad{
        companyName
        companyAddress
        email
        facebook
        phone
        workingHours
        lineIds
      }
    }`);

  const { sinsawad } = sinsawadData;
  console.log(sinsawad);
  return (
    <div className="company-info-wrapper">
      <div className="company-info-container">
        <div className="company-info-header">
          <h2>{sinsawad.companyName}</h2>
        </div>
        <div className="company-info-body">
          <div className="company-info-body-item">
            {sinsawad.companyAddress.join(" ")}
          </div>
        </div>
        {/* <div className="company-info-body">
          <div className="company-info-body-item">
            เวลาทำการ {sinsawad.workingHours}
          </div>
        </div> */}
        <div className="company-info-footer">
          <div className="company-info-footer-item">
            <div>เวลาทำการ</div>
            <div>{sinsawad.workingHours}</div>
          </div>

          <div className="company-info-footer-item">
            {sinsawad.phone.map((phone) => (
              <div className="company-contact-media">
                <i className={`${phone.replace(/-/g, "").startsWith('02') ? "fa-solid fa-square-phone" : "fa-solid fa-mobile-alt"} contact-media`} ></i><a href={`tel:${phone.replace(/-/g, '')}`}>{phone}</a>
              </div>
            ))}
            {/* <i className="fa-solid fa-phone"></i>{sinsawad.phone} */}
          </div>
          <div className="company-info-footer-item">
            <div className="company-contact-media email">
              <i className="fa-solid fa-at"></i><a href={`mailto:${sinsawad.email}`}>{sinsawad.email}</a>
            </div>
          </div>
          <div className="company-info-footer-item">
            <div className="company-contact-media line">
              {sinsawad.lineIds.map((lineId) => (
                <LineQR lineId={lineId} key={`line-id--${lineId}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;;;;;;;;;