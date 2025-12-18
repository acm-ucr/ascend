const TierCard = () => {
  return (
    <article className="md:text-xl text-lg my-12 tier-card flex flex-col md:max-w-3/4 md:mx-auto mx-4 items-center rounded-lg border border-black shadow-md">
      <div className="my-8 flex flex-col items-center w-full md:w-1/2 md:rounded-lg border border-black bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-from),var(--tw-gradient-to))] from-ascend-peach to-ascend-peach/10 text-center shadow-md">
        <div className="mt-5 inline-block w-5/6 border-b-2">
          <h2 className="font-bold">Tier 1 : ASCEND UCR Membership</h2>
        </div>
        <p className="mt-4 mb-8">
          <span className="font-bold">$15</span> per quarter or{" "}
          <span className="font-bold">$30</span> for 1 school year
        </p>
      </div>

      <section className="mb-10 ml-5">
        <p className="mb-3 font-bold italic text-lg md:text-xl">Benefits:</p>
        <ol className="ml-5 list-disc md:text-lg text-md">
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
            <span className="font-bold">Path to Ascend (P2A) Mentorship Program</span>
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
