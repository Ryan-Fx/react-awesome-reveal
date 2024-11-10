"use client";

import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className=" h-[1500px] bg-purple-400">
      <div className="flex gap-4 p-4">
        <Fade
          direction="left"
          delay={200}
          duration={4000}
          // cascade
          // damping={1e-1}
          // triggerOnce={false}
        >
          <div className="bg-red-400 p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              ipsam facilis nulla dolorum inventore dolores, quasi tempora,
              neque ullam molestias, itaque praesentium modi commodi quisquam
              vero assumenda odio. Aliquam, inventore?
            </p>
          </div>
        </Fade>
        <Fade direction="right" delay={200} duration={4000}>
          <div className="bg-blue-100 p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, maiores vel illum sequi quaerat ipsam perspiciatis
              minima nam, quos odit sed placeat porro illo debitis tempora sit
              quasi autem nesciunt!
            </p>
          </div>
        </Fade>
      </div>

      <div className="space-y-4">
        <Fade
          direction="up"
          delay={3000}
          cascade
          damping={2}
          // triggerOnce={false}
        >
          <div className="bg-red-100 p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              ipsam facilis nulla dolorum inventore dolores, quasi tempora,
              neque ullam molestias, itaque praesentium modi commodi quisquam
              vero assumenda odio. Aliquam, inventore?
            </p>
          </div>
          <div className="bg-blue-100 p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, maiores vel illum sequi quaerat ipsam perspiciatis
              minima nam, quos odit sed placeat porro illo debitis tempora sit
              quasi autem nesciunt!
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
