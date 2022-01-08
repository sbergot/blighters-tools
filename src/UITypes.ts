import React, { useState } from "react";

export interface Children {
    children: React.ReactNode;
}

export interface ClassName {
    className?: string;
}

export type IntState = [number, (i: number) => void];