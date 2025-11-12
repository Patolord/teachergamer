"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalendarBookingSectionProps {
  sectionIndex?: number;
}

export default function CalendarBookingSection({
  sectionIndex,
}: CalendarBookingSectionProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "training-session" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light",
        
      });
    })();
  }, []);

  return (
    <section
      data-scroll-section={sectionIndex}
      className="w-screen  bg-[url(/section-4-bg.png)]"
    >
      <div className="py-16 px-16 bg-black/60 bg-no-repeat bg-backdrop-none space-y-4">
        <h2 className="text-white text-3xl  text-center font-serif">
          Agende sua Sessão
        </h2>
        <p className=" text-white text-xl  text-center font-serif">
          Escolha a melhor data e horário para sua aventura
        </p>

        <div>
          <Cal
            namespace="training-session"
            calLink="up-craft-crew/training-session"
            style={{
              width: "100%",
              height: "100%",
              
            }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}
