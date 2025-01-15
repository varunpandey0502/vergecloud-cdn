"use client";

import { getAssetPath } from "@/lib/utils";

export default function StatCard({
  title,
  description,
  iconUrl,
}: Readonly<{
  title: string;
  description: string;
  iconUrl: string;
}>) {
  return (
    <div className="w-64 md:w-full translate-y-2 rounded-[32px] bg-primary">
      <div className="w-full -translate-y-2 rounded-[32px] shadow-lg">
        <div className="w-full rounded-[32px] border-2 border-primary bg-white h-80 md:h-96 md:grid-cols-12 hover:bg-primary group">
          <div className="col-span-1 flex flex-col justify-between p-4 md:p-8">
            <div className="flex flex-col items-center">
              <img
                src={getAssetPath(iconUrl)}
                alt={title}
                className="w-24 h-24 mb-4 md:mb-8"
              />
              <h3 className="mb-4 text-6xl font-bold text-primary group-hover:text-primary-foreground">
                {title}
              </h3>
              <p className="mb-12 leading-relaxed md:text-md font-normal md:leading-relaxed text-center group-hover:text-primary-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
