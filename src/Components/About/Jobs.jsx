import React from "react";

const jobs = [
  { title: "Program Director", location: "Toronto, ON", type: "Part Time" },
  {
    title: "Volunteer Coordinator",
    location: "Toronto, ON",
    type: "Part Time",
  },
  { title: "Program Director", location: "Toronto", type: "Internship" },
  { title: "Program Director", location: "Toronto", type: "Internship" },
  { title: "Program Director", location: "Toronto", type: "Internship" },
  { title: "Program Director", location: "Toronto", type: "Internship" },
];

export default function Jobs() {
  return (
    <section className="py-20 pl-5 md:pl-28">
      <div className="">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-white text-[36px] md:text-[100px] font-bold tracking-wide whitespace-nowrap">
            VIEW OUR JOBS
          </h2>
          <div className="h-1 flex-1 bg-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-5">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-white p-6 flex flex-col justify-between hover:bg-midnight-purple"
            >
              <div>
                <div className="text-white text-xl font-semibold">
                  {job.title}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-sm">
                      Location: {job.location}
                    </p>
                    <p className="text-white text-sm">{job.type}</p>
                  </div>
                  <button
                    className="mt-6 self-end border-2 border-white text-white px-6 py-2 text-sm tracking-wide hover:bg-midnight-purple font-medium"
                    type="button"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
