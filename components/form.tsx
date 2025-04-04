import { useRef } from "react";

const Form = () => {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div id="form" ref={formRef}>
      <iframe
        title="Claim Your 3 Months Free Subscription"
        aria-label="Claim Your 3 Months Free Subscription"
        frameBorder="0"
        className="rounded-lg shadow-lg bg-primary border border-white/[0.08] w-[400px] h-[660px] md:w-[400px] md:h-[620px] border-none max-w-full min-w-[300px] sm:min-w-[400px]"
        src="https://forms.zohopublic.in/vergecloud1/form/LandingPageForm/formperma/s8GXSo_TGiFE5MtkRlSmJmjPBcEnO44Y7As96CIDKbs"
      />
    </div>
  );
};

export default Form;
