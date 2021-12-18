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
