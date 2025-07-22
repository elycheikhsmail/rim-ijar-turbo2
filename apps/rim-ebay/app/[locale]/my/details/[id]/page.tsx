import MyAnnonceDetailsUI from "./ui";
import BackButton from "@repo/ui/Navigation";
import { cookies } from "next/headers";
import prisma from "../../../../../lib/prisma";

export default async function AnnonceDetail(props: {
  params: Promise<{ locale: string; annonceId: string; id: string }>;
}) {
  const params = await props.params;
  const userid = (await cookies()).get("user");
  const userIdConverted = String(userid?.value || "");
  let contact = ""
  const user = await prisma.user.findUnique({
    where: {
      id: userIdConverted,
    },
  }).catch((err) => {
    console.error("Error fetching user:", err);
    // Handle the error as needed, e.g., redirect or show an error message
  });
  console.log("User ID:", userIdConverted);
  console.log("User:", user);

  let contactObject = null;
  if (user) {
    contactObject = await prisma.contact.findFirst({
      where: { userId: userIdConverted },
    });
    if (contactObject && contactObject.contact) {
      contact = contactObject.contact;
    }
    else {
      contact = "Contact non trouvé";
    }
  }

  let modeOptionsApi: "sqlite" | "tursor";
  modeOptionsApi = "sqlite";
  if (process.env.NEXT_PUBLIC_OPTIONS_API_MODE !== "sqlite") {
    modeOptionsApi = "tursor";
  }
  let baseApiOptions = "/fr/p/api/tursor";
  if (modeOptionsApi === "sqlite") {
    baseApiOptions = "/fr/p/api/sqlite";
  }
  return (
    <div className="p-4 sm:p-6 md:p-9 overflow-hidden">
      <div>
        <BackButton />
      </div>
      <MyAnnonceDetailsUI
        lang={params.locale}
        annonceId={contact}
        baseApiOptions={baseApiOptions}
      />
    </div>
  );
}
