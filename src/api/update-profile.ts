import { api } from "@/lib/axios";

export interface UpdatedProfileBody {
  name: string;
  description: string | null;
}

export async function updatedProfile({
  name,
  description,
}: UpdatedProfileBody) {
  await api.put("/profile", { name, description });
}
