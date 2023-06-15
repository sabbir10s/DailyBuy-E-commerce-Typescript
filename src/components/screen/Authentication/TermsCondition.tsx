import React, { Dispatch, SetStateAction } from "react";
import { Helmet } from "react-helmet";

interface Props {
  setPath: Dispatch<SetStateAction<string>>;
}
const TermsCondition: React.FC<Props> = ({ setPath }) => {
  return (
    <div>
      <Helmet>
        <title>DailyBuy - Terms & Condition</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy Terms & Condition Page"
        />
      </Helmet>
      <div className="container py-16 px-6 h-[85vh] w-full">
        <div className="w-full md:w-[650px] h-[400px] relative overflow-y-auto">
          <h1 className="text-[16px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-semibold">
            Welcome to the daily buy
          </h1>
          <p className="text-[#626463] text-[16px] lg:-[18px] xl-[24px] mt-[12px]">
            These terms and conditions outline the rules and regulations for the
            use of KachaBazar's Website, located at By accessing this website we
            assume you accept these terms and conditions. Do not continue to use
            KachaBazar if you do not agree to take all of the terms and
            conditions stated on this page. The following terminology applies to
            these Terms and Conditions,
            <br />
            <br />
            Privacy Statement and Disclaimer Notice and all Agreements and Your
            refers to you, the person log on this website and compliant to the
            Company’s terms and conditions. refers to our Company refers to both
            the Client and ourselves. All terms refer to the offer, acceptance
            and consideration of payment necessary to undertake the process of
            our assistance to the Client in the most appropriate manner for the
            express purpose
          </p>
          <h1 className="text-[16px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-semibold mt-[26px] lg:mt-[34px] mb-[8px] lg:mb-[12px]">
            Cookies
          </h1>
          <p className="text-[#626463] text-[16px] lg:-[18px] xl-[24px]">
            These terms and conditions outline the rules and regulations for the
            use of KachaBazar's Website, located at By accessing this website we
            assume you accept these terms and conditions. Do not continue to use
            KachaBazar if you do not agree to take all of the terms and
            conditions stated on this page. The following terminology applies to
            these Terms and Conditions,
            <br />
            <br />
            Privacy Statement and Disclaimer Notice and all Agreements and Your
            refers to you, the person log on this website and compliant to the
            Company’s terms and conditions. refers to our Company refers to both
            the Client and ourselves. All terms refer to the offer, acceptance
            and consideration of payment necessary to undertake the process of
            our assistance to the Client in the most appropriate manner for the
            express purpose
          </p>
          <h1 className="text-[16px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-semibold mt-[26px] lg:mt-[34px] mb-[8px] lg:mb-[12px]">
            License
          </h1>
          <p className="text-[#626463] text-[16px] lg:-[18px] xl-[24px]">
            These terms and conditions outline the rules and regulations for the
            use of KachaBazar's Website, located at By accessing this website we
            assume you accept these terms and conditions. Do not continue to use
            KachaBazar if you do not agree to take all of the terms and
            conditions stated on this page. The following terminology applies to
            these Terms and Conditions,
            <br />
            <br />
            Privacy Statement and Disclaimer Notice and all Agreements and Your
            refers to you, the person log on this website and compliant to the
            Company’s terms and conditions. refers to our Company refers to both
            the Client and ourselves. All terms refer to the offer, acceptance
            and consideration of payment necessary to undertake the process of
            our assistance to the Client in the most appropriate manner for the
            express purpose
          </p>
        </div>
        <div className="absolute bottom-5">
          <button
            onClick={() => setPath("signUp")}
            className="bg-primary-600 text-white px-3 py-1 rounded"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
