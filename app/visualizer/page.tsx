"use client";
import { Slider } from "@/components/ui/slider";
import { useEffect, useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { calculatePositions } from "@/utils/CalPositions";

export type PositionData = {
  position: number;
  frame: number;
};

export type SliderType = {
  name: string;
  label: string;
  value: number[];
  max: number;
  normal: number[];
  onChange: (value: number[]) => void; // Callback for value changes
};

export default function page() {
  const [data, setData] = useState<PositionData[]>([]);
  const [stiffness, setStiffness] = useState<number[]>([30]);
  const [mass, setMass] = useState<number[]>([1]);
  const [damping, setDamping] = useState<number[]>([3]);

  const memoizedResult = useMemo(() => {
    const newStiffness = stiffness[0];
    const newMass = mass[0];
    const newDamping = damping[0];

    return calculatePositions({
      stiffness: newStiffness,
      mass: newMass,
      damping: newDamping,
    });
  }, [stiffness, mass, damping]);

  useEffect(() => {
    setData(memoizedResult);
  }, [memoizedResult]);

  return (
    <>
      <div className="mx-auto flex h-screen max-w-5xl items-center justify-between">
        <LineChart width={500} height={500} data={data}>
          <Line
            type="monotone"
            dataKey="position"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={false}
          />
          <YAxis dataKey="position" opacity={0.7} />
          <XAxis opacity={0.7} display="none" />
        </LineChart>

        <div className="w-2/5 space-y-4">
          <ControlSlider
            name="stiffness"
            label="Stiffness"
            value={stiffness}
            max={1000}
            normal={stiffness}
            onChange={setStiffness}
          />
          <ControlSlider
            name="mass"
            label="Mass"
            value={mass}
            max={100}
            normal={mass}
            onChange={setMass}
          />
          <ControlSlider
            name="damping"
            label="Damping"
            value={damping}
            onChange={setDamping}
            max={100}
            normal={damping}
          />{" "}
        </div>
      </div>
    </>
  );
}

const ControlSlider = ({
  name,
  label,
  value,
  onChange,
  max,
  normal,
}: SliderType) => (
  <div>
    <div className="mb-2 flex items-center justify-between">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
    <Slider
      name={name}
      value={value}
      max={max}
      onValueChange={(val) => onChange(val)} // Ensure the value is a number
      defaultValue={normal}
    />
  </div>
);
