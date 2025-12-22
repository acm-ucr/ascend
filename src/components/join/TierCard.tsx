const TierCard = () => {
  return (
    <article className="tier-card mx-4 my-12 flex flex-col items-center rounded-lg border border-black text-lg shadow-md md:mx-auto md:max-w-3/4 md:text-xl">
      <div className="from-ascend-peach to-ascend-peach/10 my-8 flex w-full flex-col items-center border border-black bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-from),var(--tw-gradient-to))] text-center shadow-md md:w-1/2 md:rounded-lg">
        <div className="mt-5 inline-block w-5/6 border-b-2">
          <h2 className="font-bold">Tier 1 : ASCEND UCR Membership</h2>
        </div>
        <p className="mt-4 mb-8">
          <span className="font-bold">$15</span> per quarter or{" "}
          <span className="font-bold">$30</span> for 1 school year
        </p>
      </div>

      <section className="mb-10 ml-5">
        <p className="mb-3 text-lg font-bold italic md:text-xl">Benefits:</p>
        <ol className="text-md ml-5 list-disc md:text-lg">
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
            <span className="font-bold">Ascend UCR events</span> (End-of-Year
            Banquet, Networking Mixer)
          </li>
        </ol>
      </section>
    </article>
  );
};

export default TierCard;
