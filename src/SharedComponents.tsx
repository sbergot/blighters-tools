import React from "react";
import { Children } from "./UITypes";

function range(size: number): number[] {
  return [...Array(size).keys()];
}

export function SkillLevel({ level }: { level: number }) {
  const commonclasses = "border border-black w-4 h-4 mr-1 rounded-full";
  return (
    <span className="inline-flex self-center ml-2">
      {range(4).map((idx) =>
        idx < level ? (
          <span className={`bg-black ${commonclasses}`}></span>
        ) : (
          <span className={commonclasses}></span>
        )
      )}
    </span>
  );
}

export function Gauge({ name, value }: { name: string; value: number }) {
  const commonclasses = "border border-black w-6 h-6";
  return (
    <div className="inline-flex flex-col mr-4">
      <div className="self-center">{name}</div>
      <div className="flex flex-col-reverse p-1">
        {range(6).map((idx) =>
          idx < value ? (
            <span className={`bg-black ${commonclasses}`}></span>
          ) : (
            <span className={commonclasses}></span>
          )
        )}
      </div>
    </div>
  );
}

export function Step({
  children,
  title,
  headerChildren,
}: Children & {
  title: string;
  headerChildren?: React.ReactNode
}) {
  return (
    <div className="border my-4">
      <div className="text-lg font-bold p-2 bg-gray-200 flex justify-between">
        <div>{title}</div>
        <div>{headerChildren}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function Button({
  children,
  onClick,
  disabled
}: Children & { onClick: () => void; disabled?: boolean }) {
    const colors = disabled ? "bg-gray-500 hover:bg-gray-700 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700";
  return <button
    className={`${colors} text-white text-sm font-bold py-1 px-2 rounded`}
    onClick={disabled ? () => {} : onClick}
  >
    {children}
  </button>;
}
