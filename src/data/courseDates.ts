export type CourseDate = {
    id: string; // Add ID for easier selection
    startDate: string;
    endDate: string;
    location: string;
    format: string;
    spotsLeft: number;
    totalSpots: number;
    status: "fast-voll" | "verfügbar" | "ausgebucht";
};

export const upcomingDates: CourseDate[] = [
    {
        id: "mar2026",
        startDate: "10. März 2026",
        endDate: "28. März 2026",
        location: "Frankfurt am Main (Präsenz)",
        format: "Vollzeit – 15 Werktage",
        spotsLeft: 4,
        totalSpots: 12,
        status: "fast-voll",
    },
    {
        id: "apr2026",
        startDate: "07. April 2026",
        endDate: "25. April 2026",
        location: "Frankfurt am Main (Präsenz)",
        format: "Vollzeit – 15 Werktage",
        spotsLeft: 9,
        totalSpots: 12,
        status: "verfügbar",
    },
    {
        id: "mai2026",
        startDate: "05. Mai 2026",
        endDate: "23. Mai 2026",
        location: "Frankfurt am Main (Präsenz)",
        format: "Vollzeit – 15 Werktage",
        spotsLeft: 12,
        totalSpots: 12,
        status: "verfügbar",
    },
    {
        id: "jun2026",
        startDate: "02. Juni 2026",
        endDate: "20. Juni 2026",
        location: "Frankfurt am Main (Präsenz)",
        format: "Vollzeit – 15 Werktage",
        spotsLeft: 12,
        totalSpots: 12,
        status: "verfügbar",
    },
];
