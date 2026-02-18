import { supabase } from "./supabase";
import type { Lead } from "@/types/database";

export async function submitLead(data: Omit<Lead, "id" | "created_at">): Promise<{ success: boolean; error?: string }> {
    try {
        const { error } = await supabase.from("leads").insert([data]);

        if (error) {
            console.error("Supabase error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("API error:", err);
        return { success: false, error: "Ein unerwarteter Fehler ist aufgetreten." };
    }
}
