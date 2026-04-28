import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <section className="bg-white-100 py-16 px-6 font-poppins">
      <div className="max-w-7xl mx-auto text-gray-900">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold mb-6">Refund Policy</h2>

        {/* Intro Paragraph */}
        <p className="mb-6">
          This document describes the refund policy (<strong>“Policy”</strong>) of{" "}
          <strong>MOH</strong>, a unit of <strong>SCGB Solutions Private Limited</strong>{" "}
          (“MOH” and/or “Company”), pertaining to content writing, designing,
          legal, digital marketing, and recruitment services (“Services”). The
          person and/or entity using the Services of the Company are hereinafter
          referred to as (“Client”). This Policy is to be read along with the{" "}
          <strong>Terms of Use</strong> and the <strong>Privacy Policy</strong> as
          published on the website{" "}
          <a
  href="https://manhoursonhire.com"
  className="text-black font-medium underline hover:text-yellow-400 transition-colors duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  https://manhoursonhire.com
</a>
          .
        </p>

        {/* Refund Policy List */}
        <h3 className="text-lg font-semibold mb-4">Refund Policy</h3>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            If the Client is not satisfied with the Services of the Company, then
            the Client shall within seven (07) days from the date of opting for
            such Services request a refund of the payment by submitting a form
            (“Refund Form”) on the Company’s website.
          </li>
          <li>
            Upon receipt of the Refund Form, the representative of the Company
            shall connect with the Client to understand the issue raised.
          </li>
          <li>
            In case the Company fails to address the issue raised by the Client,
            and on confirmation of such refund, the Company shall refund through
            the payment gateway within one (01) working day from the date of
            confirmation of refund.
          </li>
          <li>
            The refund shall be only in the above-mentioned circumstances and no
            interest shall be payable by Company.
          </li>
          <li>
            Save as mentioned above, the Company shall not process any refund
            request.
          </li>
          <li>
            This Policy is subject to change at the sole discretion of the
            Company without the requirement to provide prior intimation to Clients.
            Clients are advised to visit the refund policy section of the website{" "}
            <a
  href="https://manhoursonhire.com"
  className="text-black font-medium underline hover:text-yellow-400 transition-colors duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  https://manhoursonhire.com
</a>
{" "}
            to keep themselves updated about the latest refund policy.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default RefundPolicy;
