// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const I18nMiddleware = createI18nMiddleware({
  locales: ["ar", "fr"],
  defaultLocale: "ar",
});





      // const sessionToken = uuidv4(); // Génère un UUID unique
      // // Créer un nouveau token
      // const token = jwt.sign(
      //   {
      //     id: user.id,
      //     email: user.email,
      //     sessionToken: sessionToken, // Ajout de l'UUID
      //   },
      //   process.env.JWT_SECRET || "secret-key",
      //   { expiresIn: "1d" },
      // );

      // // Créer une nouvelle session
      // const newSession = await tx.userSession.create({
      //   data: {
      //     userId: user.id,
      //     token: token,
      //     isExpired: false,
      //     lastAccessed: new Date(),
      //   },
      // });


export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const path = url.pathname;
  // Exclure favicon.ico
  if (path === "/favicon.ico") {
    return NextResponse.next();
  }
  const cookieStore = await cookies();
  const jwtStore = cookieStore.get("jwt");
  console.log("jwtStore", jwtStore?.value);
  // Vérifier si le cookie jwt existe
  if (jwtStore) {
    try {
      // Vérifier la validité du JWT
      if (typeof process.env.JWT_SECRET === "string") {
        jwt.verify(jwtStore.value, process.env.JWT_SECRET);
        // Si le JWT est valide, on peut continuer
      } else {
        throw new Error("JWT_SECRET environment variable is not defined");
      }
    } catch (error) {
      throw new Error(`JWT verification failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }


  // Vérifier si le chemin commence par /my ou /admin
  if (path.startsWith("/fr/my") || path.startsWith("/fr/admin")) {
    if (!jwtStore || !jwtStore.value) {
      // Rediriger vers la page de connexion
      url.pathname = `/p/users/connexion`;
      return NextResponse.redirect(url);
    }
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
