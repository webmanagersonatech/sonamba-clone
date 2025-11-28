"use client";

import { Suspense } from "react";
import ProgramPageContent from "./Programcontent";



export default function ProgramPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <ProgramPageContent />
      
        </Suspense>
    );
}
