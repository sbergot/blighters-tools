import React from "react";
import { PlayerRepositoryContainer } from "./services";
import { Gear } from "./Types";
import { Children, ClassName, IntState } from "./UITypes";

function range(size: number): number[] {
  return [...Array(size).keys()];
}

export function SkillLevel({ level }: { level: number }) {
  const commonclasses = "border border-black w-4 h-4 mr-1 rounded-full";
  return (
    <span className="inline-flex self-center ml-2">
      {range(4).map((idx) =>
        idx < level ? (
          <span key={idx} className={`bg-black ${commonclasses}`}></span>
        ) : (
          <span key={idx} className={commonclasses}></span>
        )
      )}
    </span>
  );
}

export function Gauge({ name, state }: { name: string; state: IntState }) {
  const commonclasses = "border border-black w-6 h-6";
  const [value, setValue] = state;
  return (
    <div className="inline-flex flex-col mr-4">
      <div className="self-center">{name}</div>
      <div className="flex flex-col-reverse p-1">
        {range(6).map((idx) => (
          <span
            key={idx}
            className={`${idx < value ? "bg-gray-500" : ""} ${commonclasses}`}
            onClick={() => setValue(idx)}
          ></span>
        ))}
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
  headerChildren?: React.ReactNode;
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
  disabled,
}: Children & { onClick: () => void; disabled?: boolean }) {
  const colors = disabled ? "btn--disabled" : "btn--primary";
  return (
    <button className={`${colors} btn`} onClick={disabled ? () => {} : onClick}>
      {children}
    </button>
  );
}

export function SubTitle({ children, className }: Children & ClassName) {
  return (
    <h2 className={`text-lg font-semibold ${className ?? ""}`}>{children}</h2>
  );
}

export function Layout({ children }: Children) {
  return (
    <div className="p-4 mx-auto max-w-2xl">
      <h1 className="text-6xl">
        <a href="/">Blighters creation tool</a>
      </h1>
      <h2>Blighters is a tabletop rpg by Chris McDowall</h2>
      <a className="link" href="https://www.bastionland.com/">
        https://www.bastionland.com/
      </a>
      <div className="mt-4">
        <PlayerRepositoryContainer.Provider>
          {children}
        </PlayerRepositoryContainer.Provider>
      </div>
    </div>
  );
}

function GearE({ gear }: { gear: Gear }) {
  return (
    <div>
      <span className="font-bold">{gear.name}</span>
      {gear.description && ` - ${gear.description}`}
      {gear.options && (
        <ul className="list-disc list-inside ml-4">
          {gear.options.map((opt) => (
            <li key={opt}>{opt}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PlayerGears({ gears }: { gears: Gear[] }) {
  return (
    <ul className="list-disc list-inside">
      {gears.map((g) => (
        <GearE key={g.name} gear={g} />
      ))}
    </ul>
  );
}
