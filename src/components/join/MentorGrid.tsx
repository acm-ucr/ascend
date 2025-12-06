import Image from "next/image";

type Mentor = {
  name: string;
  major: string;
  linkedin?: string;
  image?: string;
};

const MentorGrid = ({ data }: { data: Mentor[] }) => {
  const selected = data || [];

  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
      {selected.map((mentor, idx) => (
        <div key={idx} className="flex flex-col items-center gap-3">
          {mentor.image ? (
            <Image
              src={mentor.image}
              alt={`${mentor.name} photo`}
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
          ) : (
            <div className="h-48 w-48 rounded-xl bg-gray-400" />
          )}

          <p className="text-sm text-gray-600">{mentor.major}</p>

          {mentor.linkedin ? (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0b143c] px-6 py-1 text-white underline"
            >
              Linkedin
            </a>
          ) : (
            <button
              className="rounded-full bg-gray-300 px-6 py-1 text-gray-700"
              disabled
            >
              Linkedin
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MentorGrid;
