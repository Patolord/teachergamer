"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarBookingSection() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "training-session" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light"
      });
    })();
  }, []);

  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900">
      <div className="container mx-auto px-8 py-16 max-w-6xl relative z-0">
        <h2 className="text-6xl font-bold text-white mb-8 text-center max-[1000px]:text-4xl">
          Agende sua Sessão
        </h2>
        <p className="text-white/90 text-xl mb-12 text-center max-w-2xl mx-auto">
          Escolha a melhor data e horário para sua aventura
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl">
          <Cal
            namespace="training-session"
            calLink="up-craft-crew/training-session"
            style={{
              width: "100%",
              height: "600px",
              overflow: "visible",
              borderRadius: "0.5rem"
            }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}
