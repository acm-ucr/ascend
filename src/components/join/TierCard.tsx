const TierCard = () => {
  return (
    <>
      <div className="tier-card align-items-center grid h-160 w-100 justify-items-center rounded-lg border-1 border-solid border-black shadow-lg">
        <div className="tier-title from-ascend-peach via-ascend-peach mt-5 mb-0 grid h-60 w-90 justify-items-center rounded-lg border-1 border-solid border-black bg-gradient-to-r bg-radial to-white text-center shadow-lg">
          <div className="mt-5 inline-block h-15 w-5/6 border-b-2">
            <h1 className="text-lg font-bold">Tier 1 : ASCEND UCR</h1>
            <h1 className="text-lg font-bold">Membership</h1>
          </div>
          <h1 className="mb-20">
            <span className="font-bold">$15</span> per quarter or{" "}
            <span className="font-bold">$30</span> for 1 school year
          </h1>
        </div>
        <div className="tier-description mb-10 ml-5 justify-self-start">
          <p className="mb-3 font-bold italic">Benefits: </p>
          <ol className="ml-5 list-disc">
            <li>
              <span className="font-bold">General Ascend UCR events</span> (ex.
              workshops, panels, speaker series)
            </li>
            <li>
              <span className="font-bold">Shuttling</span> to Ascend OC Events
            </li>
            <li>
              Qualified to{" "}
              <span className="font-bold">Ascend UCR Orbit Intern Program</span>
            </li>
            <li>
              Qualified to apply to{" "}
              <span className="font-bold">
                Path to Ascend (P2A) Mentorship Program
              </span>
            </li>
            <li>
              Qualified to apply to{" "}
              <span className="font-bold">Ascend UCR Board</span>
            </li>
            <li>
              <span className="font-bold">Discount</span> to other{" "}
              <span className="font-bold">Ascend UCR events</span>{" "}
              (End-of-Year-Banquet, Networking Mixer)
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
export default TierCard;
