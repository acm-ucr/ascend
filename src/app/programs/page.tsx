import Heading from "@/components/Heading";
import MeetOurMentors from "@/components/programs/MeetOurMentors";
import SubHeading from "@/components/SubHeading";

const Programs = () => {
  return (
    <div className="my-20 flex flex-col gap-8 text-center">
      <Heading title="Programs" />
      <p className="mx-auto w-2/3 text-xl">
        In addition to the meetings and events that Ascend UCR participates in,
        members are given the opportunity to apply to our programs! These
        include P2A and our Orbit Internship programs, both designed to help
        students grow as a professional.
      </p>
      <SubHeading title="Internships" />
      <div className="mx-auto my-4 flex w-2/3 flex-col gap-8 text-xl">
        <p>
          P2A (Path to Ascend), a professional mentorship program designed to
          connect driven students with experienced professionals (Pathway
          Mentors) in one of four career paths: Finance, Accounting, Consulting,
          and Technology (FACT).
        </p>
        <p>
          This selective program provides students with the opportunity to gain
          industry insight, professional guidance, and career development
          support through one-on-one mentorship. Mentees will be matched with
          mentors based on shared interests, career goals, and industry
          alignment.
        </p>
        <p>
          Whether you're looking to break into your industry, refine your career
          goals, or build a lasting professional relationship, P2A (Path to
          Ascend) is here to support your journey—one conversation at a time.
        </p>
      </div>
      <p className="font-playfair mb-12 text-2xl font-bold">
        Coming Soon: Winter 2026
      </p>
      <SubHeading title="P2A (Path to Ascend)" />
      {/* TODO: Change this text */}
      <div className="mx-auto mt-4 mb-24 flex w-2/3 flex-col gap-8 text-xl">
        <p>
          P2A (Path to Ascend), a professional mentorship program designed to
          connect driven students with experienced professionals (Pathway
          Mentors) in one of four career paths: Finance, Accounting, Consulting,
          and Technology (FACT).
        </p>
        <p>
          This selective program provides students with the opportunity to gain
          industry insight, professional guidance, and career development
          support through one-on-one mentorship. Mentees will be matched with
          mentors based on shared interests, career goals, and industry
          alignment.
        </p>
        <p>
          Whether you're looking to break into your industry, refine your career
          goals, or build a lasting professional relationship, P2A (Path to
          Ascend) is here to support your journey—one conversation at a time.
        </p>
      </div>
      <MeetOurMentors />
    </div>
  );
};

export default Programs;
