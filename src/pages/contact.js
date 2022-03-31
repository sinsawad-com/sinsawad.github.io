import { useStaticQuery, graphql } from "gatsby";
import React from 'react';
import GenericLayout from "../layouts/generic";

import { getLineUrl } from "../helpers";

const ContactUsPage = () => {

  const sinsawad = useStaticQuery(graphql`
    query {
      sinsawad {
        companyAddress
        companyName
        email
        facebook
        googleMapEmbedCode
        lat
        lon
        lineIds
        phone
        fax
        workingHours
      }
    }`).sinsawad;

  return (
    <GenericLayout title="ติดต่อเรา" heroClassName="">
      <div>
        <div className="content-area column align-items-center">
          <div className="align-self-center">
            <h2>{sinsawad.companyName}</h2>
          </div>

          <div className="address-wrapper">
            <div>
              <div className="address-subject">ที่อยู่</div><div className="address-data">
                <div className="address-multi-line">
                  {sinsawad.companyAddress.join(" ")}
                </div>
              </div>
            </div>
          </div>

          <div className="address-wrapper">
            <div>
              <div className="address-subject">Email</div><div className="address-data">
                <div className="address-multi-line">
                  <a href={`mailto:${sinsawad.email}`}>{sinsawad.email}</a>
                </div>
              </div>
            </div>
          </div>


          <div className="address-wrapper">
            <div >
              <div className="address-subject">โทร</div>
              <div className="address-data">

                {sinsawad.phone.map((phone) => (
                  <div className="address-multi-line" key={`phone-${phone}`}>
                    <i className={`${phone.replace(/-/g, "").startsWith('02') ? "fa-solid fa-square-phone" : "fa-solid fa-mobile-alt"} contact-media`} ></i><a href={`tel:${phone.replace(/-/g, '')}`}>{phone}</a>
                  </div>
                ))}

              </div>
            </div>
          </div>


          <div className="address-wrapper">
            <div>
              <div className="address-subject">
                แฟกซ์
              </div>
              <div className="address-data">
                <div className="address-multi-line">
                  <i class="fa-solid fa-fax contact-media"></i>{sinsawad.fax}
                </div>
              </div>
            </div>
          </div>

          <div className="address-wrapper">
            <div>
              <div className="address-subject">
                Line ID
              </div>
              <div className="address-data">
                {sinsawad.lineIds.map((lineId) => (
                  <div className="address-multi-line" key={`line-id--${lineId}`}>
                    <i class="fa-brands fa-line contact-media"></i>
                    <a href={getLineUrl(lineId)}  >{lineId}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="address-wrapper">
            <center>
              <a href={`https://maps.google.com/?saddr=Current%20Location&daddr=${sinsawad.lat},${sinsawad.lon}`} className="button button-primary text-white">
                นำทาง
              </a>
            </center>
          </div>
          <div className="address-wrapper no-padding width-100" dangerouslySetInnerHTML={{ __html: sinsawad.googleMapEmbedCode }}>
          </div>
        </div>
      </div>
    </GenericLayout>
  );
};

export default ContactUsPage;