import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const profile = await db.discordProfile.findUnique({
    where: {
      userId,
    },
  });

  return profile;
};
